// 通用的接口入口，若有全局属性或者函数必须声明在该对象下
var hit = {};
/*
 * 通用的异步load函数
 * */
;$(function() {
    var options = [
            {
               'id': 'nav-tree',
               'page': 'tree'
            },
            {
                'id': 'content',
                'page': 'content'
            }
        ], i = 0, len = options.length, o = {},

        base_url = 'http://localhost/graduation-pro-2014/';

    for (; i < len; i++) {
        o = options[i];
        $('#' + o.id).load(base_url + "load/frameset/" + o.page);
    }
});

/*
 * 通用的ajax加载函数，返回标准的json格式数据
 * @param {String} url 请求地址
 * @param {Object} data 请求数据
 * @param {Function} func 响应函数
 * */
hit.load = function(url, data, func) {
    $.ajax({
        url: url,
        method: 'post',
        data: data,
        success: function(msg) {
            /*
             * 统一的通信协议：
             * status：状态信息，ok为响应成功，err为失败
             * data: 响应数据
             * */
            var obj = JSON.parse(msg);

            if (obj.status === "ok") {
                func(obj.data);
            } 
        }
    });
};
