;(function() {
	var gFun = {
		addition: {
			tree2Tab_link:  function(tabID, treeInfo) {
				tabInfo = {};
				tabInfo.tabName = treeInfo.name;
				tabInfo.id = treeInfo.code;
				hit.INTERFACES.tab.addTabs(tabID, [tabInfo]);
			},
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

		initLink: function(){
		    var treeID = $('#nav-tree').find('.tree-area').first().attr('id');
		    var tabID = $('#content').find('.tab-area').first().attr('id');
		    console.log('tree:' + treeID + "\ntab:" + tabID);
		    hit.INTERFACES.tree.setTarget(treeID, tabID, 'tree2Tab_link');
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