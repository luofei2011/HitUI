
/*
 * 设置树列表点击事件
 */
$(document).on('click', '.tree-area li', function() {
	if ($(this).attr('opened') == 'Y') {
	// 打开的节点
		$(this).removeAttr('opened');
		$(this).children('ul').hide();
	} else {
	// 关闭的节点;或叶子节点
		if ($(this).attr('leaf') != 'Y') {	
		//node
			$(this).attr('opened', 'Y');
			$(this).children('ul').show();
		} else {							
		//leaf
			if ( $(this).attr('select') != 'Y' ) {	
			//haven't been choosen
				//deselect other selected node in this tree

				thetree = $(this).closest('.tree-area');
				//TODO:now选中哪一项应该由component来做，以便以后封装
				thetree.find('[select="Y"]').removeAttr('select');//.css('background-color', '#FFF');
				$(this).attr('select', 'Y');//.css('background-color', '#8ab');

				info = hit.COMPONENT.tree.getInfoByNode( $(this) );
				
				hit.GLOBAL.function.offerInfo(thetree, info);
				hit.PARAMETER.global.sendInfo(thetree, info);
			} else {								
			//already been choosen
				hit.COMPONENT.tree.dealWithNode( $(this) );
			}
		}
	}
	return false;
});
