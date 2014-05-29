/*
 * lib/component.tree.js 树组件：树状导航结构
 * @author: freemen
 * @date: 2014-05-06
 * */

;(function() {
//好吧那我不随便添加全局变量了
var treeDef = {
	//the dataStructer definition of the tree
	_treeNode: {},

	/*
	 * TODO:treeType should be change into pageID/tabId
	 */
	initTree: function(treeType){
		this._treeNode.type = treeType;
		$('.tree-area').append('<ul class='+treeType+' code=treeroot><li code=root level=0 class=tree-node ></li></ul>');
	},

	/*
	 * 初始化时 添加树节点
	 */
	addTreeNode: function(type, name, code, father, level, index, leafFlag, taskFlag, task) {
		//--get this tree according to the type
		var theTree = $('.tree-area .' + type);

		//--Father Node
		var father_ul= theTree.find('ul[code=' + father + ']');
		//TODO: 若无father，临时构建空的父节点。
		//先默认会按顺序addTreeNode，除了root不考虑乱序
		
		//若father列表（ul）不存在，则在father项（li）下创造一个father列表
		if ( !father_ul.length ) {
			theTree.find('li[code=' + father + ']').append('<ul code=' + father + ' level=' + (level-1) + ' class=tree-list ></ul>');
			var father_ul= theTree.find('ul[code=' + father + ']');
		}

		//--Children Node
		var child_li = theTree.find('li[code=' + code + ']');
		//若存在此code，则更新内容
		if ( child_li.length ) {
			child_li.prepend('<p>' + name + '</p>');
		} else {
			//在father列表（ul）底下增加子列表项
			//TODO: 增加的时候还需考虑顺序
			father_ul.append('<li code=' + code + ' level=' + level + ' leaf=' + leafFlag + ' class=tree-node ><p>'+name+'</p></li>');	
		}
	},


	/*
	 *
	 */
	setOpenNode: function(type, nodes) {
		//--get this tree according to the type
		var theTree = $('.tree-area .' + type);

		//set the open list
		var selectedNode = theTree;
		for (len = nodes.length, i = 0; i < len; i++) {
			var node = theTree.find('li[code=' + nodes[i] + ']');
			//set all it's parent as open node
			node.parentsUntil(theTree, 'li').attr('opened', 'Y');
			//if openNode is leaf then select it
			if(node.attr('leaf') == 'Y') {
				selectedNode = node;	//only the last one node could be choosen
			} else {
				node.attr('opened', 'Y');
			}
		}
		//hide the hiden, show the shown
		theTree.find('ul').hide();
		theTree.find('li[opened="Y"]').children('ul').show();
		//set selected
		selectedNode.attr('select', 'Y');
		selectedNode.css('background-color', '#8ab');
		return selectedNode;
	},
	
	dealWithNode: function( node ) {
		alert( node.css('background-color') );
	},

	getInfoByCode: function( code ) {
	//TODO:tree 的 type 就暂时不管了
		var theTree = $('.tree-area' );
		var node = theTree.find('li[code=' + code + ']');
		var info = {};
		info.tabName = node.find('p').text();
		return info;
	}

};

//add tree to hit.COMPONENT
//如果已经定义COMPONENT，则在后面添加tree
if ( hit.COMPONENT ){
	hit.COMPONENT.tree = treeDef;
} else {
//若不存在，则增加COMPONENT定义
	hit.COMPONENT = {
		tree : treeDef
	}
}

})();
