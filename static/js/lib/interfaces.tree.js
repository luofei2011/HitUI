/*
 * lib/interfaces.tree.js, 负责控制tree的数据交互的接口
 * @author: freemen
 * @date: 2014-05-13
 * */
;(function() {
//不乱加全局变量，嗯。
var iTree = {
	/*
	 * some setting
	 * */
	config: {}, 


	/*
	 * 构造树的数据 从数据库中获取
	 * [Object] options 数据库的设置: {
	 * 		[String] table 数据表名,
	 *		[String] db 所在数据库名,
	 *		[Object] conf 数据操作信息（接hit.query的通用接口）
	 *		[Array] openNodes 设置打开的节点
	 * }
	 * */
	makeFromDB: function( treeID, options ) {
		hit.setDB( options.table, options.db );
			console.time("js/lib/hit.INTERFACES.tree.makeFromDB query");
		hit.query('load/deal_data', '', options.conf
		,function( data ) {
			hit.COMPONENT.tree.initTree(treeID);
			dealDBData( treeID, data );
		});
			console.timeEnd("js/lib/hit.INTERFACES.tree.makeFromDB query");		
		dealDBData= function( treeID, data ) {
			for (len = data.length, i = 0; i < len; i++ ) {
				var tem = data[i];
				//console.log( tem );
				hit.COMPONENT.tree.addTreeNode(treeID, tem.menu_name, tem.menu_code, tem.menu_father, tem.menu_level, tem.menu_index, tem.leaf_flag, tem.task_flag);
			}
			hit.COMPONENT.tree.setOpenNode( treeID, options.openNodes );
		}

	},

	/*
	 * 构造树的数据 从传进来的参数获取
	 * */
	makeFromData: function( treeID, Treedata ) {
		hit.COMPONENT.tree.initTree( treeID );
		var data = Treedata.data;
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			//console.log( tem );
			hit.COMPONENT.tree.addTreeNode(treeID, tem.name, tem.code, tem.father, tem.level, tem.index, tem.leafFlag, tem.taskFlag);
		}

		hit.COMPONENT.tree.setOpenNode( treeID, Treedata.open );
	},

	/*
	 * TODO:根据传进来的参数更改树节点结构 
	 * [Object] this.config = {
	 * 		[String] op 操作: create, add, del, changeName
	 *		[String] method 方式: DB 根据配置从数据库获取, data 直接传进数据
	 *		[Object] options 数据库配置,格式参考上方this.makeFromDB
	 *		[Object] data 直接传的数据,格式参考config/tree_test.js

	 * */
	changeByConfig: function( treeID, config ) {
	},

	getInfoByCode: function( treeID, code ) {
		return hit.COMPONENT.tree.getInfoByCode(treeID, code );
	},

	getInfoByNode: function( node ) {
		return hit.COMPONENT.tree.getInfoByNode( node );
	},

	setTarget: function( treeID, tabID, fun ){
		$('#'+treeID).attr({targetID: tabID, targetFun: fun});
	},

	funs: {
		switch2tab : function( tabID, info ) {
			hit.INTERFACES.tab.switch2Tab(tabID, info.code, info.name);
		},
	},

};

if ( hit.INTERFACES ) {
	hit.INTERFACES.tree = iTree;
} else {
	hit.INTERFACES = {
		tree: iTree
	}
}

})();
