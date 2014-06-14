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
	initTree: function(treeID){
		$('.tree-area#' + treeID).append('<ul class=treeroot code=treeroot><li code=root level=0 class=tree-node ></li></ul>');
	},

	/*
	 * 初始化时 添加树节点
	 */
	addTreeNode: function( treeID, name, code, father, level, index, leafFlag, taskFlag, task) {
		//--get this tree according to the type
		//var theTree = $('.tree-area .' + type);
		var theTree = $('.tree-area#' + treeID + ' ul.treeroot');

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
		var prehtml = "";
		for(var i=0; i<level; i++){
			prehtml += "<div class='tree-indent'></div>";
		}
		prehtml += "<div class='tree-pre'></div>";
		//若存在此code，则更新内容
		if ( child_li.length ) {
			//TODO: here only root node will do it
			child_li.attr('leaf', leafFlag);
			child_li.prepend(prehtml + '<p>' + name + '</p>');
		} else {
			//在father列表（ul）底下增加子列表项
			//TODO: 增加的时候还需考虑顺序
			father_ul.append('<li code=' + code + ' level=' + level + ' leaf=' + leafFlag + ' class=tree-node >'+prehtml+'<p>'+name+'</p></li>');	
		}
	},


	/*
	 *
	 */
	setOpenNode: function(treeID, nodes) {
		//--get this tree according to the type
		//var theTree = $('.tree-area .' + type);
		var theTree = $('.tree-area#' + treeID + ' ul.treeroot');

		//set the open list
		var selectedNode = theTree;
			if ( nodes!= null ){
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
		}
		//hide the hiden, show the shown
		theTree.find('ul').hide();
		theTree.find('li[opened="Y"]').children('ul').show();
		//set selected
		selectedNode.attr('select', 'Y');
		return selectedNode;
	},
	
	dealWithNode: function( node ) {
		console.log( node.css('background-color') );
	},

	focusNodeByCode: function( treeID, nodeCode ) {
		var theTree = $('.tree-area#' + treeID )
		, node = theTree.find('li.tree-node[code=' + nodeCode + ']');
		thetree.find('[select="Y"]').removeAttr('select');//.css('background-color', '#FFF');
		node.attr('select', 'Y');
	},

//RETURN DATA
	
	getSelectedInfo: function( treeID ) {
		var theTree = $('.tree-area#' + treeID );
		var node = theTree.find('li[select="Y"]');
		return this.getInfoByNode( node );
	},
	
	getInfoByCode: function( treeID, code ) {
	//TODO:tree 的 type 就暂时不管了
		var theTree = $('.tree-area#' + treeID );
		var node = theTree.find('li.tree-node[code=' + code + ']');
		return this.getInfoByNode( node );
	},

	getInfoByNode: function( node ) {
		var info = {};
		info.name = node.find('p').text();
		info.code = node.attr('code');
		info.father = node.closest('ul').attr('code');
		info.index = node.prevAll('li').length + 1;
		info.leafFlag = (node.find('ul').length > 0) ? 'N' : 'Y';
		return info;
	},

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
