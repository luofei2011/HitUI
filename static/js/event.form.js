/*
 * event.parameter.js 处理全局变量的控制事件
 * */
 $(document).on('click', '[type="submit"]', function() {
 	console.log('get the form-area id is ' + $(this).parentsUntil('.form-area').parent().attr('id'));
 	hit.INTERFACES.form.getFromInfo($(this).parentsUntil('.form-area').parent().attr('id'));
 	return false;
 });