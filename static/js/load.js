// 通用的接口入口，若有全局属性或者函数必须声明在该对象下
var hit = {

    /*
     * 存储数据库配置信息
     * */
    dbCONF: {},

    // 存储当前的网站路径
    baseURL: "",

    /*
     * 封装的异步查询函数
     * @param {String} url 请求地址
     * @param {Object} data 请求数据
     * @param {String} op 数据库的什么操作
     * @param {Function} func 请求成功后的回调函数
     * */
    query: function(url, data, op, func) {
        $.ajax({
            url: this.baseURL + url,
            method: 'post',
            data: {
                data: {
                    db: {
                        dbName: this.dbCONF.name,
                        t: this.dbCONF.t
                    },
                    data: data,
                    op: op
                }
            },
            success: function(msg) {
                var r = JSON.parse(msg);
                if (r.status == "ok") 
                    func(r.data);
                else
                    alert('响应失败!');
            }
        });

        return false;
    },

    /*
     * 通用的ajax加载函数，返回标准的json格式数据
     * @param {String} url 请求地址
     * @param {Object} data 请求数据
     * @param {HTML NODE} targetNode 目标节点
     * */
    load: function(config, data, targetNode) {
        // 首先初始化表头信息
        var _this = this;
        //this.initTableHead(config, targetNode);
        this._createTableHead(config, targetNode);

        // 存储数据库配置信息
        this.dbCONF = config.db;

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
                    if (obj.data) {
                        //_this.initTableContent(obj.data, config, targetNode);
                        _this._createTableBody(obj.data, config);
                    }
                } 
            }
        });
    },

    /*
     * 初始化表格头部信息
     * */
    _createTableHead: function(con, tNode) {
        var _table = this._createTable(con),

            /*************表头信息部分*********************/
            oTable = $('<div class="gr-d-grid-outer-bg"></div>'),
            html = "", i = 0, arr = [], tmp ={}, len;

        // LOG
        console.time('createTableHead');
        // 表头宽度信息
        html += _table.html;

        // 生成表头 第一行 信息
        arr = con.headContent[0];
        html += '<tr>';

        if (con.hasCheckBox)
            html += '<td class="gr-d-grid-head-cell" style="width: 30px;" rowspan=2><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox" id="check_all"></div></td>';

        for (len = arr.length; i < len; i++) {
                // 得到每列的配置信息(Object)
                tmp = arr[i];
                html += '<td class="text-' + tmp.align + ' gr-d-grid-head-cell"'; // 文本对其方式
                
                // 是否显示多行
                if (tmp.multiply && tmp.colspan > 1) 
                    html += ' colspan=' + tmp.colspan;
                else 
                    html += ' rowspan=2';

                html += '><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap">' + tmp.label;

                // 是否可排序
                if (tmp.isOrdered)
                    html += '<span class="hit-grid-sortIcon-desc"></span>';

                html += '</div></td>';
        }
        html += '</tr>';

        // 初始化第二列信息
        arr = con.headContent[1];
        if (arr) {
            html += '<tr>';
            for (i = 0, len = arr.length; i < len; i++) {
                tmp = arr[i];
                html += '<td class="text-' + tmp.align + ' gr-d-grid-head-cell"'; // 文本对其方式

                html += '><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap">' + tmp.label;

                // 是否可排序
                if (tmp.isOrdered)
                    html += '<span class="hit-grid-sortIcon-desc"></span>';

                html += '</div></td>';
            }
            html += '</tr>';
        }
        html += '</table><div class="gr-d-grid-bg" style="' + _table.width + 'px"></div>';

        // 拼接所有的片段组合成头部信息
        html = '<div class="gr-d-grid-outer-bg"><div class="gr-d-grid-rowView"><div class="gr-d-grid-head">' + html + '</div></div></div>';

        // 接下来拼接内容部分的信息
        html += '<div class="gr-d-grid-view"><div class="gr-d-grid-body">' + _table.html + '</table></div></div>';

        // 渲染结果
        $('.' + tNode).append(html);
        // LOG
        console.timeEnd('createTableHead');
    },

    /*
     * 通用的表格头部函数
     * @param {Object} config 表格头部配置信息
     * */
    initTableHead: function(config, targetNode) {
        // TODO 是否需要用户自定义表格每列的宽度
        var oTable = $('<div class="gr-d-grid-outer-bg"></div>'),
            html = "", i = 0, len, arr = [], tmp = {}, _table = {};

        html += '<div class="gr-d-grid-rowView"><div class="gr-d-grid-head">';
        _table = this.initTable(config);
        html += _table.html;

        // 循环定义表头信息
        for (len = config.headMsg.length, i = 0; i < len; i++) {
            html += '<tr>';

            if (config.hasCheckBox && !i)
                html += this.createCheckBox('', true);

            for(arr in config.headMsg[i]) {

                // 得到每列的配置信息(Object)
                tmp = config.headMsg[i][arr];
                html += '<td class="text-' + tmp.align + ' gr-d-grid-head-cell"'; // 文本对其方式
                
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

        html += '</table><div class="gr-d-grid-bg" style="width: ' + _table.width + 'px;"></div></div></div>';
        oTable.html(html);
        $('.' + targetNode).append(oTable);
    },

    _createTableBody: function(data, con, tNode) {
        var html = "", tmp = {}, i = 0, len,
            map = con.bodyContent, key = '';

        console.time('createTableBody');
        key = this._searchKey(map);
        for (len = data.length; i < len; i++) {
            tmp = data[i];
            html += '<tr class="table-row-has-event" id="TABLEID$' + tmp[key] + '">';

            if (con.hasCheckBox)
                html += '<td class="gr-d-grid-cell" style="width: 30px;"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox"></div></td>';

            for (var o in tmp) {
                if (map[o]['isShow']) {
                    html += '<td class="gr-d-grid-cell" id="FIELD$' + o + '"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap grid-cell-show">' + tmp[o] + '</div>';

                    if (map[o]['canEdit']) {
                        //html += '<input type="text" value="' + tmp[o] + '" class="grid-cell-edit">';
                        html += this._createFormByType(tmp[o], map[o]['type'], map[o]['valid'], map[o]['sureValue']);
                        html += '<div class="edited-and-no-save"></div>'
                    }
                    
                    html += '</td>';
                }
            }
            html += '</tr>';
        }

        $('.gr-d-grid-body tbody').append(html);
        console.timeEnd('createTableBody');
    },

    /*
     *  根据type返回设定好的表单信息
     *  @param {String} value
     *  @param {String} type
     *  @param {String} valid
     *  @param {Array} vals 如果类型为select时需要的值
     *  @return {String} html
     * */
    _createFormByType: function(value, type, valid, vals) {
        switch(type) {
            case "select":
                return this.COMPONENT.form.select(value, valid, vals);
            case "textarea":
                return this.COMPONENT.form.textarea(value, valid);
            case "radio":
                return this.COMPONENT.form.radio(value, valid);
            case "checkbox":
                return this.COMPONENT.form.checkbox(value, valie);
            case "password":
                return this.COMPONENT.form.password(value, valid);
            case "hidden":
                return this.COMPONENT.form.hidden(value, valid);
            case "date":
                return this.COMPONENT.form.date(value, valid);
            default: 
                return this.COMPONENT.form.text(value, valid);
        }
    },

    /*
     * 寻找配置文件中的主键
     * @param {Object} obj
     * @return {String} field
     * */
    _searchKey: function(obj) {
        for (var o in obj) {
            if (obj[o]['isKey'])
                return o;
        }
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
        _table = this.initTable(config);
        html += _table.html;

        for(tmp in data) {
            html += '<tr class="table-row-has-event">';

            if (config.hasCheckBox) 
                html += this.createCheckBox(data[tmp]['id']);

            for (var o in data[tmp]) {
                if (o !== 'id')
                    html += '<td class="gr-d-grid-cell"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap grid-cell-show">' + data[tmp][o] + '</div><input type="text" value="' + data[tmp][o] + '" class="grid-cell-edit"></td>';
            }

            html += '</tr>';
        }
        html += '</table></div>';

        // 渲染表格
        oTable.html(html);
        $('.' + targetNode).append(oTable);
    },

    /*
     * 返回表头宽度配置信息
     * @param {Object} con 配置信息
     * @return {String} html 拼接好的html片段
     * */
    _createTable: function(con) {
        var i = 0, html = "", w = 0;

        // 对配置信息中宽度信息进行求和，得到表格宽度
        for (len = con.widthMsg.length; i < len; i++) {
            html += '<td style="width: ' + con.widthMsg[i] + 'px;"></td>';
            w += con.widthMsg[i];
        }

        if (con.hasCheckBox) {
            html = "<td style='width: 30px;'></td>" + html;
            w += 30;
        }

        html = '<table cellPadding=0 cellSpacing=0 border=0 style="width: ' + w + 'px;"><tr style="height: 0px;">' + html + '</tr>';

        return {
            html: html,
            width: w
        };
    },

    initTable: function(config) {
        var i = 0, w = 0, html = "", con = config.widthMsg;

        // 对配置信息中宽度信息进行求和，得到表格宽度
        for (len = con.length; i < len; i++)
            w += con[i];

        if (config.hasCheckBox)
            w += 30;

        // 首先定义好表格的长度相关信息
        html += '<table';
        
        html += ' cellPadding=0 cellSpacing=0 border=0 style="width: ' + w + 'px;"><tr style="height: 0px;">';

        if (config.hasCheckBox)
            html += '<td style="width: 30px;"></td>';

        for(i = 0; i < len; i++) {
            html += '<td style="width: ' + con[i] + 'px;"></td>';
        }
        html += '</tr>';

        return {
            html: html,
            width: w
        };
    },
    /*
     * 创建checkbox
     * */
    createCheckBox: function(id, isRowSpan) {
        var str = '<td style="width: 30px;"';

        if (isRowSpan)
            str += ' rowspan=2 class="gr-d-grid-head-cell"';
        else 
            str += ' class="gr-d-grid-cell"';

        str += '><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox"'

        if (isRowSpan)
            str += ' id="check_all"';

        str += '>';

        if (id) {
            str += '<input type="hidden" value="' + id + '">';
        }

        str += '</div></td>';

        return str;
    },
    filterID: function(str) {
        return str.split('$')[1];
    },
    convertToSQL: function(arr) {
        var i = 0,
            len = arr.length,
            re = [];

        for (; i < len; i++) {
            re.push({
                id: arr[i].id,
                q: this._convertArrToSQL(arr[i].q)
            });
        }

        return re;
    },
    _convertArrToSQL: function(arr) {
        var i = 0, len = arr.length, str = "";

        for (; i < len; i++) {
            str += arr[i].name + "='" + arr[i].value + "'";

            if (i < len - 1)
                str += ", ";
        }

        return str;
    }
};

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
