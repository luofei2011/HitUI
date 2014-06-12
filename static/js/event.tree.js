
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

				//TODO:now选中哪一项应该由component来做，以便以后封装
				thetree = $(this).closest('.tree-area');
				thetree.find('[select="Y"]').removeAttr('select');//.css('background-color', '#FFF');
				$(this).attr('select', 'Y');//.css('background-color', '#8ab');
				openNodes = [$(this).attr('code')];
				info = hit.COMPONENT.tree.getInfoByNode( $(this) );

				//TODO:make a new interfaces function like setTarget
				target = thetree.attr('targetID');
				fun = thetree.attr('targetFun');
				console.log('targetID:'+target+"\ntargetFun:"+fun);
				if( target!= null && target.length >0 )
					hit.INTERFACES.tree.funs[fun](target, info);
				// hit.PARAMETER.global.setTreeOpenNodes( openNodes );
				// //TODO:now 选中后更新
				// hit.PARAMETER.global.setCurrentDataNode( $(this) );
				// hit.PARAMETER.global.update();
			} else {								
			//already been choosen
			//TODO:mention Global Setting & Global function
				hit.COMPONENT.tree.dealWithNode( $(this) );
			}
		}
	}
	return false;
});
