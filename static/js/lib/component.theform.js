/*
 * 表单组件: 独立出来的表单
 * @author: freemen 
 * @date: 2014-05-30
 * */

;(function() {
// 不能随意构造全局变量
var temform= {
        createFromConfig: function( config, formID ) {
            html = "";
            html += '<h1> Hi! my config is in the log, too</h1>';
            console.log(config);
            $('.form-area#'+formID).empty().append(html);
        },
    };

    if ( hit.COMPONENT ){
    	hit.COMPONENT.theform = temform;
    } else {
    	hit.COMPONENT = {
    		theform: temform
    	}
    }
})();
