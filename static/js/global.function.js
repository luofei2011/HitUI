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

	};

	if ( hit.GLOBAL ){
		hit.GLOBAL.function = gFun;
	} else {
		hit.GLOBAL = {
			function: gFun
		}
	}

})();

//get the info of the line
$(document).on('click', '.dept_define tr.table-row-has-event', function(e){
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

	//return the 
	nodes = $(this).find('td.gr-d-grid-cell').not('.field-checkbox')
	, info = {};
	nodes.each(function(index, element){
		id = $(element).attr('id');
		name = id.split('$')[2];
		value = $(element).find('.grid-cell-show').html();
		info[name] = value;
		// console.log(index+': ' + name + ' = ' + value);
	})
	console.log(info);
});