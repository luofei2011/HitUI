/*
 * event.form.js 处理form的控制事件
 * */
 $(document).on('click', '[type="submit"]', function() {
    //TODO:check if it's good
 	console.log('get the form-area id is ' + $(this).closest('.form-area').attr('id'));
    info = hit.COMPONENT.theform.getFormInfo($(this).closest('.form-area').attr('id'));
    theform = $(this).closest('.form-area');
    hit.GLOBAL.function.offerInfo(theform, info);
    hit.PARAMETER.global.sendInfo(theform, info);
 	return false;
 });

 $(document).on('click', '.form-item.poup', function() {
    // var pNode = $(this).closest('.poup-select'),
        // url = pNode.attr('url'),
        var url = $(this).attr('url')
        , conf = hit.CONFIG[url];

    // pNode.trigger('blur');

    hit.PLUGIN.poup.init({
        left: 100,
        top: 10,
        label: '子表信息'
    }, conf, $(this));
    // }, conf, pNode);
 });

 $(document).on('select', '.form-item.poup', function() {
    // var map = arguments[1]
    // , name = $(this).closest('div.form-item').attr('name');
    // if( map ) {
    //     if(map[name]) {
    //         $(this).attr('value',map[name]);
    //     }
    // }
    var map = arguments[1],
        fields = $(this).closest('form').find('input, textarea, select');

    fields.each(function() {
        var name = $(this).closest('div.form-item').attr('name');
        if (map[name])
            $(this).val(map[name]);
    });
 }),

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
    $(this).removeClass('edited-and-error');
});