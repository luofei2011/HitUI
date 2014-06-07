/*
 * 设置tab列表点击事件
 */
$(document).on('click', '.tabtitle-area>.tabtitle', function() {
	if ($(this).attr('select') == 'Y') {
	} else {
	// 关闭的节点;或叶子节点
		$(this).parent().children('.tabtitle[select="Y"]').removeAttr('select');
		$(this).attr('select', 'Y');

		// $(this).parent().parent().children('.tabcontent-area').children('.tabcontent').hide().end().children('.tabcontent#'+$(this).attr('id')).show();
		$(this).parent().parent().children('.tabcontent-area').children('.tabcontent').hide().end().children('.tabcontent[tabid='+$(this).attr('tabid')+']').show();
	}
	//避免冒泡事件
	return false;
});

//refill the content, use the COMPONENT function
$(function() {
	$(document).on('click', '.upload-content', function() {
	//alert($(this).closest('.tabcontent').attr('tabid'));
		hit.COMPONENT.tab.refillContent($(this).closest('.tab-area').attr('layerid'), $(this).closest('.tabcontent'), $(this).siblings('.tabcontentin').val(), 'text' );
		return false;
	});

	$(document).on('click', '.upload-link', function() {
	//alert($(this).closest('.tabcontent').attr('tabid'));
		hit.COMPONENT.tab.refillContent( $(this).closest('.tab-area').attr('layerid'), $(this).closest('.tabcontent'), $(this).siblings('.tabcontentin').val(), 'page' );
		return false;
	});

});
