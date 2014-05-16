// 通用的接口入口，若有全局属性或者函数必须声明在该对象下
var hit = {

    /*
     * 正式使用的时候需要配置网站的路径
     * */
    baseURL: '',

    /*
     * 加载用户的配置信息
     * */
    conf: {},

    /*
     * 监听全局的鼠标点击状态
     * */
    isMouseDown: false,

    /*
     * 监听鼠标移动事件的位置
     */
    mousePos: {
        x: 0,
        y: 0
    },

    /*
    *数据库设置
    *@param {String} table 访问的表名
    *@param {String} databse 选择的数据库, 默认为test
    * */
    // TIPS 每次修改DB配置以后需要在完成以后恢复!!!
    setDB: function(table, database) {
        //设置database默认值, 保证参数有效
        database = database || 'test';
        table = table || 'testT';
        //设置
        if ( this.conf['db'] ) {
            this.conf['db'].name = database;
            this.conf['db'].t = table;
        } else {
            this.conf['db'] = {
                name: database,
                t: table
            }
        }
    },

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
            cache: false,
            data: {
                data: {
                    db: {
                        dbName: this.conf.db.name,
                        t: this.conf.db.t
                    },
                    data: data,
                    op: op
                }
            },
            success: function(msg) {
                var r = JSON.parse(msg);
                //console.log(msg);
                if (r.status == "ok") {
                    if (r.data.pager)
                        hit._resultPager(r.data.pager);
                    func(r.data.data);
                }
                else
                    alert('响应失败!');
            }
        });

        return false;
    },

    /*
     * 初始化查询区域
     */
    _createQ: function(con) {
        var i = 0, len = con.qParam.length,
            tmp = {},
            html = "";
        if (!con.hasQuery || !len) {
            $('div.gr-query').hide();
            return false;
        }

        // 需要显示时
        for (; i < len; i++) {
            tmp = con.qParam[i];
            html += '<div class="q-field-item"><label>' + tmp.label + '</label>';
            switch(tmp.type) {
                case "text":
                case "select":
                default:
                    html += '<input type="text" name="' + tmp.name + '"></input></div>';
                    break;
            }
        }

        $('div.gr-query fieldset').prepend(html);
    },

    /*
     * 初始化功能区
     * */
    _createOp: function(con, tNode) {
        var html = "", arr = con.funcArr, i = 0,
            len = arr.length,
            tNode = tNode || $('div.gr-toolbar');

        console.time('createOp');

        // 首先初始化表格的相关操作功能
        for(; i < len; i++) {
            html += '<a href="" class="hit-button gap-left"><span class="hit-button-txt hit-button-icon icon-' +
                    arr[i] + '" op="' + arr[i] + '">' + funcNameMapping(arr[i]) + '</span></a>';
        }

        // TODO 是否需要添加表格的简单搜索功能
        //
        // 封装片段并渲染
        html = '<table style="width: 100%;"><tr><td style="width: 100%;">' + html + '</td></tr></table>';
        tNode.append(html);

        console.timeEnd('createOp');

        // 内部私有函数，用于做功能名的映射
        function funcNameMapping(str) {
            switch(str) {
                case 'add':
                    return "添加";
                case 'delete':
                    return "删除";
                case 'edit':
                    return "编辑";
                case 'save':
                    return "保存";
                default:
                    return "新功能，请到load.js中添加";
            };
        }
    },

    /*
     * 通用的ajax加载函数，返回标准的json格式数据
     * @param {String} url 请求地址
     * @param {Object} data 请求数据
     * @param {HTML NODE} targetNode 目标节点
     * */
    load: function(config, targetNode) {
        // 首先初始化表头信息
        var _this = this;

        // 配置查询区域
        this._createQ(config);

        // 是否需要显示功能区
        if (config.hasFunc)
            this._createOp(config, '');

        this._createTableHead(config, targetNode);

        $.ajax({
            url: config.url,
            method: 'post',
            data: {
                data: {
                    db: {
                        dbName: this.conf.db.name,
                        t: this.conf.db.t
                    },
                    data: '',
                    op: {
                        op: 'select',
                        con: 'limit,' + this.conf.pageNum + ";offset,0"
                    }
                }
            },
            cache: false,
            success: function(msg) {
                /*
                 * 统一的通信协议：
                 * status：状态信息，ok为响应成功，err为失败
                 * data: 响应数据
                 * */
                //console.log(msg);
                var obj = JSON.parse(msg);

                console.log(obj);
                if (obj.status === "ok") {
                    if (obj.data) {
                        if (obj.data.pager)
                            _this._resultPager(obj.data.pager);
                        _this._createTableBody(obj.data.data, config);
                    }
                } 
            }
        });
    },

    /*
     * 初始化表格头部信息
     * @param {Object} con 配置信息
     * @param {String} tNode 目标节点
     * */
    _createTableHead: function(con, tNode) {
        var _table = this._createTable(con),

            /*************表头信息部分*********************/
            oTable = $('<div class="gr-d-grid-outer-bg"></div>'),
            html = "", i = 0, arr = [], tmp ={}, len, idIdx = 0;

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
                if (tmp.multiply && tmp.colspan > 1)  {
                    html += ' colspan=' + tmp.colspan;
                    idIdx += (tmp.colspan * 1);
                } else {
                    html += ' rowspan=2';
                    idIdx += 1;
                }

                html += ' id="HEADCELL$'+ idIdx +'"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap">' + tmp.label;

                // 是否可排序
                if (tmp.isOrdered)
                    html += '<span class="grid-sort hit-grid-sortIcon-desc" tField="' + tmp.isOrdered + '"></span>';

                html += '</div>';

                // 是否可作为固定列
                // TODO 默认只有第一行的数据能进行固定
                if (!(tmp.multiply && tmp.colspan > 1) && tmp.isFixed)
                    html += '<span class="caret fixed-col"></span>';

                html += '</td>';
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
                    html += '<span class="grid-sort hit-grid-sortIcon-desc" tField="' + tmp.isOrdered + '"></span>';

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
     * 根据配置参数及获取到的数据渲染表格内容
     * @param {Array} data 从数据库获取得到的内容
     * @param {Object} con 用户的配置数据
     * @param {String} tNode 节点
     * */
    _createTableBody: function(data, con, tNode) {
        var html = "", tmp = {}, i = 0, len,
            map = con.bodyContent, key = '', idIdx = 0;

        console.time('createTableBody');
        key = this._searchKey(map);
        for (len = data.length; i < len; i++) {
            // 重置索引
            idIdx = 0;
            tmp = data[i];
            html += '<tr class="table-row-has-event" id="TABLEID$' + tmp[key] + '">';

            if (con.hasCheckBox)
                html += '<td class="gr-d-grid-cell field-checkbox" style="width: 30px;"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox"></div></td>';

            for (var o in tmp) {
                if (map[o]['isShow']) {
                    idIdx++;
                    html += '<td class="gr-d-grid-cell" id="'+ idIdx +'$FIELD$' + o + '"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap grid-cell-show">' + tmp[o] + '</div>';

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
            case "poup": // 弹出选择组件
                return this.COMPONENT.form.poup(value, valid, '');
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
     * 返回表头宽度配置信息
     * @param {Object} con 配置信息
     * @return {String} html 拼接好的html片段
     * */
    _createTable: function(con) {
        var i = 0, html = "", w = 0;

        // 对配置信息中宽度信息进行求和，得到表格宽度
        for (len = con.widthMsg.length; i < len; i++) {
            html += '<td style="width: ' + con.widthMsg[i] + 'px;" id="INDEX$' + (i + 1) + '"></td>';
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

    /*
     * 系统中所有的ID都按照统一的格式进行生成，该函数用于
     * 获取到ID中存储的有用信息
     *
     * ID生成规则:
     *  String + $ + trueValue
     *
     * 即：任意的字母，以$分离，最后才是ID中的有用信息
     * */
    filterID: function(str) {
        return str.split('$').pop();
    },

    /*
     * 把传递的数据库查询参数转变成可直接查询的sql片段
     *  如：
     *  {a:'a', b: 'b'} => "a='a', b='b'"
     * @param {Array} arr 查询参数
     * @return {Array} 返回带有可直接查询的sql片段
     * */
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

    /*
     * 私有接口，供sql片段生成
     * @param {Array} arr
     * @return {String}  str
     * */
    _convertArrToSQL: function(arr) {
        var i = 0, len = arr.length, str = "";

        for (; i < len; i++) {
            str += arr[i].name + "='" + arr[i].value + "'";

            if (i < len - 1)
                str += ", ";
        }

        return str;
    },
    
    /*
     * 根据新数据重绘表格
     * @param {Object} data
     * */
    reDrawTableContent: function(data) {
        $('.gr-d-grid-body tbody tr').each(function(i) {
            if (i) {
                $(this).remove();
            }
        });
        hit._createTableBody(data, hit.conf);
    },

    /*
     * 分页功能
     * @param {Object} pager
     * */
    _resultPager: function(pager) {
        var _node = $('div.gr-grid-pager'),
            p_idx = $('#selectPager'),
            p_pages = $('span.gr-pager-pages', _node),
            p_label = $('div.gr-pager-right', _node),
            tmp = '',
            pages = Math.ceil(pager.pages / pager.perNum);

        // 重绘显示数量
        $('#pageNumSetting option').each(function() {
            if (this.value == hit.conf.pageNum) {
                $(this).attr('selected', true);
            } else {
                $(this).attr('selected', false);
            }
        });

        // 重绘所有的页码
        p_idx.empty();
        for(var i = 1; i <= pages; i++) {
            tmp = '<option value="' + i + '"';

            if (i == pager.cur)
                tmp += ' selected';

            tmp += '>' + i + '</option>';
            p_idx.append(tmp);
        }

        // 刷新总数
        p_pages.text('/ ' + pages);

        // 刷新右边提示
        p_label.text('每页' + pager.perNum + '条,共' + pager.pages + '条');

        // 刷新按钮状态
        this.reloadPagerBtnStatus(pager.cur, pages);
    },

    /*
     * 刷新分页中按钮的状态
     * @param {Number} cur 当前页
     * @param {Number} pages 总的页数
     * */
    reloadPagerBtnStatus: function(cur, pages) {
        var _p = $('div.gr-grid-pager'),
            _first = $('span.gr-pager-first', _p),
            _last = $('span.gr-pager-last', _p),
            _next = $('span.gr-pager-next', _p),
            _prev = $('span.gr-pager-prev', _p);

        // 上一页和首页功能禁止
        if (cur <= 1) {
            _first.parent().addClass('gr-btn-disabled');
            _prev.parent().addClass('gr-btn-disabled');
        } else {
            _first.parent().removeClass('gr-btn-disabled');
            _prev.parent().removeClass('gr-btn-disabled');
        }

        // 尾页和下一页功能
        if (cur >= pages) {
            _last.parent().addClass('gr-btn-disabled');
            _next.parent().addClass('gr-btn-disabled');
        } else {
            _last.parent().removeClass('gr-btn-disabled');
            _next.parent().removeClass('gr-btn-disabled');
        }
    },

    /*
     * 分页刷新
     * @param {HTML-Object} node
     * @param {Number} cur
     * */
    changePagerCur: function(node, cur) {
        var node = node | $('#selectPager');

        $('option', node).each(function() {
            if (this.value == cur) {
                $(this).attr('selected', true);
                return;
            } else {
                $(this).attr('selected', false);
            }
        });
    }
};

/*
 * 通用的异步load函数
 * */
;$(function() {
    var options = [
            {
               'id': 'nav-tree',
               //'page': 'tree'
			   'page': '../elements/tab'
            },
            {
                'id': 'content',
                'page': 'content'
            }
        ], i = 0, len = options.length, o = {},

        base_url = hit.baseURL || 'http://localhost/graduation-pro-2014/';
        // base_url2 = 'http://localhost/webfreemen/graduation-pro-2014/';

    for (; i < len; i++) {
        o = options[i];
        $('#' + o.id).load(base_url + "load/frameset/" + o.page);
    }
	console.log("static/js/load.js: len:" + len);
});
