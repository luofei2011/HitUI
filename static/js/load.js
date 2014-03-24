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
