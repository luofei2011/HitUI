/*
 * lib/interfaces.tree.js, 负责控制tree的数据交互的接口
 * @author: freemen
 * @date: 2014-05-13
 * */

var iTree = {
	/*
	 * some setting
	 * */
	config: {}, 


	/*
	 *
	 * */
	makeFromDB: function( type, options ) {
		treeType = type;
		hit.setDB( options.table, options.db );
			console.time("js/lib/hit.INTERFACES.tree.makeFromDB query");
		hit.query('load/deal_data', '', options.conf
		,function( data ) {
			hit.COMPONENT.tree.initTree(treeType);
			dealDBData( treeType, data );
		});
			console.timeEnd("js/lib/hit.INTERFACES.tree.makeFromDB query");		
		dealDBData= function( type, data ) {
			for (len = data.length, i = 0; i < len; i++ ) {
				var tem = data[i];
				console.log( tem );
				hit.COMPONENT.tree.addTreeNode(type, tem.menu_name, tem.menu_code, tem.menu_father, tem.menu_level, tem.menu_index, tem.leaf_flag, tem.task_flag);
			}
			hit.COMPONENT.tree.setOpenNode( treeType, options.openNodes );
		}

	},

	/*
	 *
	 * */
	makeFromConfig: function( type, config ) {
	},

	/*
	 *
	 * */
	makeFromTest: function( type, Treedata ) {
		hit.COMPONENT.tree.initTree( type );
		var data = Treedata.data;
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			console.log( tem );
			hit.COMPONENT.tree.addTreeNode(type, tem.name, tem.code, tem.father, tem.level, tem.index, tem.leafFlag, tem.taskFlag);
		}

		hit.COMPONENT.tree.setOpenNode( type, Treedata.open );
	}

};

if ( hit.INTERFACES ) {
	hit.INTERFACES.tree = iTree;
} else {
	hit.INTERFACES = {
		tree: iTree
	}
}
