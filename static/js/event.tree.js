/*
 * event.tree.js 处理关于树的点击事件
 *
 * */
$(document).on('click', 'a', function() {
});

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
				//TODO:tabid
				//deselect other selected node in this tree
				$(this).closest('.tree-area').find('[select="Y"]').removeAttr('select').css('background-color', '#FFF');
				$(this).attr('select', 'Y').css('background-color', '#8ab');
			} else {								
			//already been choosen
			//TODO:mention Global Setting & Global function
				hit.COMPONENT.tree.dealWithNode( $(this) );
			}
		}
	}
	//避免冒泡事件
	return false;
});
