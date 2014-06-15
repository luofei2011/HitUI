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
		var treedata = {}, info = {}, temdata = [];
		hit.setDB( options.table, options.db );
			console.time("js/lib/hit.INTERFACES.tree.makeFromDB query");
		hit.query('load/deal_data', '', options.conf
		,function( data ) {
			info.field = 'DB$' + options.db + '$' + options.table;
			treedata.info = info;
			treedata.open = options.openNodes;
			//将不同数据库里读到的数据规整化
			switch (options.table) {
				case 'menu':
					for (len=data.length, i=0; i<len; i++ ) {
						var tem = data[i];
						var item = {
							'name': tem.menu_name,
							'code': tem.menu_code,
							'father': tem.menu_father,
							'level': tem.menu_level,
							'index': tem.menu_index,
							'leafFlag': tem.leaf_flag,
							'taskFlag': tem.task_flag,
						}
						temdata.push(item);
					}
					treedata.data = temdata;
					break;
				case 'inv_department':
					var rootIndex = false;
					for (len=data.length, i=0; i<len; i++ ) {
						var tem = data[i];
						var item = {
							'name': tem.dept_name,
							'code': tem.dept_id,
							'father': tem.dept_father,
							'leafFlag': tem.dept_flag,
						}
						if (item.code == 'root') {
							item.index = 1;
							item.level = 0;
							rootIndex = i;
						}
						temdata.push(item);
					}
					treedata.data = rootIndex? hit.INTERFACES.tree._format(temdata, rootIndex) : [];
					break;
				default:
					break;
			}

			hit.INTERFACES.tree.makeFromData(treeID, treedata);
		});
			console.timeEnd("js/lib/hit.INTERFACES.tree.makeFromDB query");		
	},

	/*
	 * 构造树的数据 从传进来的参数获取
	 * */
	makeFromData: function( treeID, Treedata ) {
		info = Treedata.info;
		hit.COMPONENT.tree.initTree( treeID, info );
		var data = Treedata.data;
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			//console.log( tem );
			hit.COMPONENT.tree.addTreeNode(treeID, tem.name, tem.code, tem.father, tem.level, tem.index, tem.leafFlag, tem.taskFlag);
		}

		hit.COMPONENT.tree.setOpenNode( treeID, Treedata.open );
	},

	/**
	 * [makeFromSimpleData description]
	 * @param  {[type]} treeID   [description]
	 * @param  {Object} Treedata {	[description] 
	 *             {Array} data [
	 *             		{Object} {
	 *             			{String} name,
	 *             			{String} code,
	 *             			{String} father,
	 *             		}
	 *             ]              	
	 * }
	 * @return {[type]}  
	 */
	makeFromSimpleData: function( treeID, Treedata ) {
		info = Treedata.info;
		hit.COMPONENT.tree.initTree( treeID, info );
		var data = Treedata.data;
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			//console.log( tem );
			hit.COMPONENT.tree.addTreeNode(treeID, tem.name, tem.code, tem.father, tem.level, tem.index, tem.leafFlag, tem.taskFlag);
		}

		hit.COMPONENT.tree.setOpenNode( treeID, Treedata.open );
	},

	//递归
	_format: function( tree , index ) {
		var newtree = [], i, len = tree.length, code = tree[index].code;
		newtree.push(tree[index]);
		//find sons
		var leafFlag = 'Y', sonindex = 1;
		for (i=0; i<len; i++){
			if (tree[i].father == code ) {
				leafFlag = 'N';

				tree[i].level = Number(tree[index].level) + 1;
				tree[i].index = sonindex++;

				c = this._format( tree, i )
				newtree = newtree.concat(c);
			}
		}
		newtree[0].leafFlag = leafFlag;
		return newtree;
	},
	
	focusNodeByCode: function( treeID, nodeCode ) {
		hit.COMPONENT.tree.focusNodeByCode(treeID, nodeCode);
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

	setTarget: function( treeID, targetID, targetFun ) {
		$('#'+treeID).attr({targetID: targetID, targetFun: targetFun});
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
