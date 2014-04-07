// 通用的接口入口，若有全局属性或者函数必须声明在该对象下
var hit = {

    /*
     * 通用的ajax加载函数，返回标准的json格式数据
     * @param {String} url 请求地址
     * @param {Object} data 请求数据
     * @param {HTML NODE} targetNode 目标节点
     * */
    load: function(config, data, targetNode) {
        // 首先初始化表头信息
        var _this = this;
        this.initTableHead(config, targetNode);

        $.ajax({
            url: config.url,
            method: 'post',
            data: data,
            cache: false,
            success: function(msg) {
                /*
                 * 统一的通信协议：
                 * status：状态信息，ok为响应成功，err为失败
                 * data: 响应数据
                 * */
                var obj = JSON.parse(msg);

                console.log(obj);
                if (obj.status === "ok") {
                    if (obj.data) 
                        _this.initTableContent(obj.data, config, targetNode);
                } 
            }
        });
    },

    /*
     * 通用的表格头部函数
     * @param {Object} config 表格头部配置信息
     * */
    initTableHead: function(config, targetNode) {
        // TODO 是否需要用户自定义表格每列的宽度
        var oTable = $('<div class="gr-d-grid-rowView"></div>'),
            html = "", i = 0, len, arr = [], tmp = {}, _table = {};

        html += '<div class="gr-d-grid-head">';
        _table = this.initTable(config.widthMsg, "auto-layout");
        html += _table.html;

        // 循环定义表头信息
        for (len = config.headMsg.length, i = 0; i < len; i++) {
            html += '<tr>';

            for(arr in config.headMsg[i]) {

                // 得到每列的配置信息(Object)
                tmp = config.headMsg[i][arr];
                html += '<td class="text-' + tmp.align + '"'; // 文本对其方式
                
                // 是否显示多行
                if (!i) {
                    if (tmp.multiply && tmp.colspan > 1) 
                        html += ' colspan=' + tmp.colspan;
                    else 
                        html += ' rowspan=2';
                }

                html += '><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap">' + tmp.name + '</div></td>';
            }

            html += '</tr>';
        }

        html += '</table><div class="gr-d-grid-bg" style="width: ' + _table.width + 'px;"></div></div>';
        oTable.html(html);
        $('.' + targetNode).append(oTable);
    },

    /*
     * 表格数据渲染函数, 分页渲染
     * @param {Array} data json格式的数据
     * */
    initTableContent: function(data, config, targetNode) {
        var oTable = $('<div class="gr-d-grid-view"></div>'),
            html = "",
            tmp = {},
            _table = {};

        html += '<div class="gr-d-grid-body">';
        _table = this.initTable(config.widthMsg);
        html += _table.html;

        for(tmp in data) {
            html += '<tr>';

            for (var o in data[tmp]) {
                if (o !== 'id')
                    html += '<td class="gr-d-grid-cell"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap">' + data[tmp][o] + '</div></td>';
            }

            html += '</tr>';
        }
        html += '</table></div>';

        // 渲染表格
        oTable.html(html);
        $('.' + targetNode).append(oTable);
    },
    initTable: function(con, css) {
        var i = 0, w = 0, html = "";

        // 对配置信息中宽度信息进行求和，得到表格宽度
        for (len = con.length; i < len; i++)
            w += con[i];

        // 首先定义好表格的长度相关信息
        html += '<table';
        
        if (css) 
            html += ' class="' + css +'"';

        html += ' cellPadding=0 cellSpacing=0 border=0 style="width: ' + w + 'px;"><tr style="height: 0px;">';

        for(i = 0; i < len; i++) {
            html += '<td style="width: ' + con[i] + 'px;"></td>';
        }
        html += '</tr>';

        return {
            html: html,
            width: w
        };
    }
};

// 滚动条联动事件 
;$(function() {
    console.log('start');
    $(window).on('scroll', 'div.gr-d-grid-view', function() {
        console.log('scroll');
    });
    $(window).scroll(function() {
        console.log('scroll');
    });
    $('div.gr-d-grid-view').bind(function() {
        console.log('scroll');
    });
});

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
