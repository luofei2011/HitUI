/*
 * event.parameter.js 处理全局变量的控制事件
 * */
 $(document).on('click', '[type="submit"]', function() {
    //TODO:check if it's good
 	console.log('get the form-area id is ' + $(this).closest('.form-area').attr('id'));
    info = hit.COMPONENT.theform.getFromInfo($(this).closest('.form-area').attr('id'));
    theform = $(this).closest('.form-area');
    hit.PARAMETER.global.sendInfo(theform, info);
 	return false;
 });

 $(document).on('blur', 'input.form-item', function() {
    var rule = [], i = 0,
        len,
        val = this.value;
/*
    if ($(this).hasClass('poup-select')) {
        val = $(this).find('input').val();
    }

    // 恢复隐藏状态
    if (val !== $(this).prev().text()) {
        // 显示当前为修改状态
        $(this).next().show();
        // 记录整条记录是否更新
        $(this).closest('tr').attr('isEdited', 'true');
    }
    $(this).hide().prev().text(val).show().height($(this).parent().height() - 4);

    if ($(this).attr('valid')) {
        rule = $(this).attr('valid').split(';');
    } else {
        return;
    }*/
    if ($(this).attr('required')) {
    	rule.push('required');
    }

    for (len = rule.length; i < len; i++) {
        if (!hit.VALIDATE[rule[i]](this)) {
            $(this).addClass('edited-and-error');
            return;
        }
    }

    // 若验证都通过了，则移除提示框
    $(this).prev().removeClass('edited-and-error');
});