/*
 * event.tab.js 处理关于树的点击事件
 *
 * */
$(document).on('click', 'a', function() {
});

/*
 * 设置树列表点击事件
 */
$(document).on('click', '.tabtitle-area>.tabtitle', function() {
	if ($(this).attr('select') == 'Y') {
	} else {
	// 关闭的节点;或叶子节点
		$(this).parent().children('.tabtitle[select="Y"]').removeAttr('select');
		$(this).attr('select', 'Y');

		$(this).parent().parent().children('.tabcontent-area').children('.tabcontent').hide().end().children('.tabcontent[tabid='+$(this).attr('tabid')+']').show();
	}
	//避免冒泡事件
	return false;
});
