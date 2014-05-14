$(document).on('click', 'a', function() {
});

/*
 * 设置树列表点击事件
 */
$(document).on('click', '.tree-area .menu li', function() {
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
				$('.tree-area .menu [select="Y"]').removeAttr('select').css('background-color', '#FFF');
				$(this).attr('select', 'Y').css('background-color', '#8ab');
			} else {								
			//already been choosen
			//TODO:mention Global Setting & Global function
				alert($(this).css('background-color'));
			}
		}
	}
	return false;
});
