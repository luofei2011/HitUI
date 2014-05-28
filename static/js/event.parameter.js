/*
 * event.parameter.js 处理全局变量的控制事件
 * */
 $(document).on('click', '.clear-global-parameter', function() {
	hit.PARAMETER.global.clearData(window.localStorage);
	return false;
 });
