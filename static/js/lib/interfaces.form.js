/*
 * lib/interfaces.form.js, 负责控制form的数据交互的接口
 * @author: freemen
 * @date: 2014-05-13
 * */
;(function() {
//不乱加全局变量，嗯。
var iForm= {
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
				//console.log( tem );
				hit.COMPONENT.tree.addTreeNode(type, tem.menu_name, tem.menu_code, tem.menu_father, tem.menu_level, tem.menu_index, tem.leaf_flag, tem.task_flag);
			}
			hit.COMPONENT.tree.setOpenNode( treeType, options.openNodes );
		}

	},

	/*
	 * 构造树的数据 从传进来的参数获取
	 * */
	makeFromData: function( type, Treedata ) {
		hit.COMPONENT.tree.initTree( type );
		var data = Treedata.data;
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			//console.log( tem );
			hit.COMPONENT.tree.addTreeNode(type, tem.name, tem.code, tem.father, tem.level, tem.index, tem.leafFlag, tem.taskFlag);
		}

		hit.COMPONENT.tree.setOpenNode( type, Treedata.open );
	},

	/*
	 * TODO:根据传进来的参数更改树节点结构 
	 * [Object] this.config = {
	 * 		[String] op 操作: create, add, del, changeName
	 *		[String] method 方式: DB 根据配置从数据库获取, data 直接传进数据
	 *		[Object] options 数据库配置,格式参考上方this.makeFromDB
	 *		[Object] data 直接传的数据,格式参考config/tree_test.js

	 * */
	changeByConfig: function( type, config ) {
	},

};

if ( hit.INTERFACES ) {
	hit.INTERFACES.form = iForm;
} else {
	hit.INTERFACES = {
		form: iForm
	}
}

})();
