/*
 * lib/interfaces.form.js, 负责控制form的数据交互的接口
 * @author: freemen
 * @date: 2014-05-29
 * */
;(function() {
//不乱加全局变量，嗯。
var iForm= {

	createForm: function( config ) {
		html = "";
		html += '<h1> Hi! It\'s me again! </h1>';
		$('div.gr-query fieldset').empty().append(html);
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数放在config内
	 * */
	linkForm: function( config ) {

	},

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

};

if ( hit.INTERFACES ) {
	hit.INTERFACES.form = iForm;
} else {
	hit.INTERFACES = {
		form: iForm
	}
}

})();
