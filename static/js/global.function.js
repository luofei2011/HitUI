;(function() {
	var gFun = {
		addition: {
			tree2Tab_link:  function(tabID, treeInfo) {
				tabInfo = {};
				tabInfo.tabName = treeInfo.name;
				tabInfo.id = treeInfo.code;
				tabInfo.type = 'page';
				field = treeInfo.field;
				tabInfo.content = hit.CONFIG.bind[field][treeInfo.code];
				hit.INTERFACES.tab.addATab(tabID, tabInfo);
			},
			toTree_code: function(treeID, sourceInfo) {
				var code = sourceInfo.id;
				hit.INTERFACES.tree.focusNodeByCode(treeID, code);
			}
		},

		send2Target: function( targetID, targetFun, info ) {
			console.log('targetID:'+targetID+"\ntargetFun:"+targetFun);
			if( typeof(targetID) != undefined  && targetID!= null ) {
				this.addition[targetFun](targetID, info);
			}
		},

		offerInfo: function( thisNode, info ) {
			//the partner info are writen in the node
			targetID = thisNode.attr('targetID');
			targetFun = thisNode.attr('targetFun');
			this.send2Target(targetID, targetFun, info);
		},

		/**
		 * initLink 初始化时给树导航和表单进行绑定
		 */
		initLink: function(){
		    var treeID = $('#nav-tree').find('.tree-area').first().attr('id');
		    var tabID = $('#content').find('.tab-area').first().attr('id');
		    console.log('tree:' + treeID + "\ntab:" + tabID);
		    if( treeID== null || typeof(treeID) == undefined || tabID== null || typeof(tabID) == undefined ){
		    	//need to be reload
		    	console.log("need to be reload");
		    	window.location.reload();
		    }
		    hit.INTERFACES.tree.setTarget(treeID, tabID, 'tree2Tab_link');
		    hit.INTERFACES.tab.setTarget(tabID, treeID, 'toTree_code');
		},

			//return the info
		getFormInfo: function( therow ){
			nodes = therow.find('td.gr-d-grid-cell').not('.field-checkbox')
			, info = {};
			nodes.each(function(index, element){
				id = $(element).attr('id');
				name = id.split('$')[2];
				value = $(element).find('.grid-cell-show').html();
				info[name] = value;
				// console.log(index+': ' + name + ' = ' + value);
			})
			console.log(info);
			return info;
		}

	};

	if ( hit.GLOBAL ){
		hit.GLOBAL.function = gFun;
	} else {
		hit.GLOBAL = {
			function: gFun
		}
	}

})();

//get the info of a row of the table
$(document).on('click', '.get-form-info tr.table-row-has-event', function(e){
	var _target = e.srcElement ? e.srcElement : e.target;
	checkbox = $(this).find('td.gr-d-grid-cell.field-checkbox input');
	cb = checkbox[0];

	//鼠标正好点击checkbox时，会触发其他事件，因此不能重复check the checkbox
    if (_target.nodeName.toLowerCase() !== 'input') {
		$(this).toggleClass('gr-d-grid-row-selected');
		cb.checked = cb.checked? false : true;
	}

	//only one column can be selected, we need to clear all the other selected status
	if (cb.checked) { 
		$(this).siblings('tr.table-row-has-event').each(function(){
			$(this).removeClass('gr-d-grid-row-selected');
			$(this).find('td.gr-d-grid-cell.field-checkbox input')[0].checked = false;
		})
	}
});

//reflect to the tree
$(document).on('click', '.dept_define tr.table-row-has-event', function(e){
	thetree = $('.dept_define .tree-area');
	treeID = thetree.attr('id');
	//select the tree
	var info = hit.GLOBAL.function.getFormInfo($(this));
	hit.COMPONENT.tree.focusNodeByCode( treeID, info.dept_id);
});

//select the table row when hitting the tree
$(document).on('click', '.dept_define.hit-2column-tree .tree-area li', function(){
	//select which tree node
	info = hit.COMPONENT.tree.getInfoByNode( $(this) );

	//find the same cell with the treenode
	target = $('.dept_define tr.table-row-has-event .gr-d-grid-cell input[name=dept_id][value='+info.code +']');
	//..and the row
	row = target.closest('tr.table-row-has-event');
	//check checkbox and select the row
	row.find('td.gr-d-grid-cell.field-checkbox input')[0].checked = true ;
	row.addClass('gr-d-grid-row-selected');
	//discheck checkbox and disselect other rows
		row.siblings('tr.table-row-has-event').each(function(){
			$(this).removeClass('gr-d-grid-row-selected');
			$(this).find('td.gr-d-grid-cell.field-checkbox input')[0].checked = false;
		})

});

//reload the tree when click the reload button of the table
$(document).on('click', '.dept_define span.hit-button-txt.gr-btn-iconOnly.gr-pager-reload', function(){
	thetree = $('.dept_define.hit-2column-tree .tree-area')
	treeID = thetree.attr('id');
	thetree.html('');
	var options = {
		table: 'inv_department',
		db: 'inv',
		conf: {
			op: 'select',
			con: 'limit, 50;pager,false'
		},
		openNodes: []
	};
	options.openNodes.push('root');
	hit.INTERFACES.tree.makeFromDB(treeID, options);
});

//reflect to the form
$(document).on('click', '.inv_ware_main tr.table-row-has-event', function(e){
	theform = $('.inv_ware_main .form-area');
	formID = theform.attr('id');
	//return the info
	var info = hit.GLOBAL.function.getFormInfo($(this));
	hit.COMPONENT.form.fillFormInfo(formID, info);
});

$(document).on('click', '.inv_ware_main input[btnid="submit"]', function(){
	theform = $(this).closest('.form-area');
	formID = theform.attr('id');
	var info = hit.COMPONENT.form.getFormInfo(formID);

	row = $('.inv_ware_main tr.table-row-has-event.gr-d-grid-row-selected');
	var nodes = row.find('td.gr-d-grid-cell').not('.field-checkbox');
	nodes.each(function(index, element){
		id = $(element).attr('id');
		name = id.split('$')[2];
console.log(name);
	console.log(info);
console.log(info[name]);
		if (info[name] != null && typeof(info[name]) != undefined) {
			console.log($(element));
			if (info[name] != $(element).find('input').val()) {
				$(element).find('.grid-cell-show').html(info[name]);
				$(element).find('input').val(info[name]);
				$(element).find('.edited-and-no-save').attr('style', 'display: block');
				row.attr('isEdited', 'true');
			}
		}
	})

	
})

