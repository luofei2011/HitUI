$(document).on('click', 'a', function() {
});

$(document).on('click', '.tree-area .menu li', function() {
	if ($(this).attr('opened') == 'Y') {
		$(this).removeAttr('opened');
		$(this).children('ul').hide();
	} else {
		if ($(this).attr('leaf') != 'Y') {	//node
			$(this).attr('opened', 'Y');
			$(this).children('ul').show();
		} else {							//leaf
			if ( $(this).attr('select') != 'Y' ) {	//haven't been choosen
				$('.tree-area .menu [select="Y"]').removeAttr('select').css('background-color', '#FFF');
				$(this).attr('select', 'Y').css('background-color', '#8ab');
			} else {								//already been choosen
				alert($(this).css('background-color'));
			}
		}
	}
	return false;
});
