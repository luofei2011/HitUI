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