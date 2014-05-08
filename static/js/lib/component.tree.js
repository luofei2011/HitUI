/*
 * 树组件：树状导航结构
 * @author: freemen
 * @date: 2014-05-06
 * */

var treeDef = {
	_treeNode: {},


};

//如果已经定义COMPONENT，则在后面添加tree
if ( hit.COMPONENT ){
	hit.COMPONENT.tree = treeDef;
} else {
//若不存在，则增加COMPONENT定义
	hit.COMPONENT = {
		tree : treeDef
	}
}
