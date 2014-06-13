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
    // TIPS 每次修改DB配置以后需要在完成以后恢复!!!//freemen:什么意思啊？
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
                console.log(r);
                if (r.status == "ok") {
                    if (r.data.pager && !(r.data.pager instanceof Array))
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
	 *	配置表单
	 */
	_setForm: function(con) {
		formurl = 'load/elements/form';
		url = hit.baseURL + formurl;
		//$('div.gr-query fieldset').load( url, {tableCon: con}, function(response, status) {
        $('div.gr-query fieldset').load( url, '', function(response, status) {
			switch( status ) {
				case 'success':
					break;
				case 'error':
					$(this).prepend('<h2>404!</h2>');
				default:
					$(this).prepend('<h1>ERROR!!!</h1>');
					break;
			}
		});
	},

    /*
     * 初始化查询区域
     */
    _createQ: function(con, pNode) {
        var i = 0, len = con.qParam.length,
            tmp = {},
            html = "";
        if (!con.hasQuery || !len) {
            pNode.hide();
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

        $('fieldset', pNode).prepend(html);
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
        html = '<table style="width: 100%;" class="auto-layout"><tr><td style="width: 100%;">' + html + '</td><td><a href="#" class="toggle-query-field">隐藏查询区域</a></tr></table>';
        tNode.append(html);

        console.timeEnd('createOp');

        // 内部私有函数，用于做功能名的映射
        function funcNameMapping(str) {
            switch(str) {
                case 'add':
                    return "添加";
                case 'add_poup':
                    return "添加"
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
    load: function(name, targetNode) {
        // 首先初始化表头信息
        var _this = this,
            tmpDB = {
                name: this.conf.db.name,
                t: this.conf.db.t
            }, pNode = targetNode || $('div.gr'), tmp, pager, html = "",
            config = this.CONFIG[name],
            id;

        this.setDB(config.db.t, config.db.name);

        tmp = $('<div class="gr-container"></div>');
        // 记录当前配置路径
        tmp.attr('url', name);
        id = 'GR_' + (+new Date()) + '_' + Math.floor(Math.random() * 10);
        tmp.attr('id', id);

        pNode.append(tmp);

        pNode = tmp;

        // 配置查询区域
        tmp = $('<div class="gr-query"></div>');
        tmp.append('<fieldset><legend>查询参数</legend><a class="hit-button pull-right query-btn"><span class="hit-button-txt">查询</span></a></fieldset>');
        pNode.append(tmp);
        this._createQ(config, tmp);

		//this._setForm(config);

        // 表格区域
        tmp = $('<div class="gr-table"></div>');
        pNode.append(tmp);

        // 表格分页信息
        pager = $('<div class="gr-grid-pager"></div>');
        pager.attr('target', id);
        pNode.append(pager);
        html += '<div class="gr-pager clearfix"><div class="gr-pager-left"><select name="" class="hit-button pageNumSetting">' +
                '<option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option><option value="200">200</option></select>' +
                '<span class="separator"></span><a href="javascript:void(0);" class="hit-button hit-button-plain" title="首页"><span class="hit-button-txt gr-btn-iconOnly gr-pager-first"></span></a>' +
                '<a href="javascript:void(0);" class="hit-button hit-button-plain" title="上一页"><span class="hit-button-txt gr-btn-iconOnly gr-pager-prev"></span></a><select name="" class="hit-button selectPager"><option value="1">1</option><option value="2">2</option></select>' +
                '<span><span class="gr-pager-pages">/ 2</span></span><a href="javascript:void(0);" class="hit-button hit-button-plain" title="下一页"><span class="hit-button-txt gr-btn-iconOnly gr-pager-next"></span></a>' +
                '<a href="javascript:void(0);" class="hit-button hit-button-plain" title="尾页"><span class="hit-button-txt gr-btn-iconOnly gr-pager-last"></span></a><span class="separator"></span><a href="javascript:void(0);" class="hit-button hit-button-plain" title="刷新"><span class="hit-button-txt gr-btn-iconOnly gr-pager-reload"></span></a>' +
                '</div><div class="gr-pager-right">每页10条, 共19条</div></div>';

        pager.append(html);

        // 拖拽区域
        pNode.append('<div class="hit-resizer-trigger"></div>');

        pNode = tmp;

        // 是否需要显示功能区
        if (config.hasFunc) {
            tmp = $('<div class="gr-toolbar"></div>');
            pNode.append(tmp);
            this._createOp(config, tmp);
        }

        tmp = $('<div class="gr-border"></div>');
        pNode.append(tmp);

        // 表格头部区域
        this._createTableHead(config, tmp);

        $.ajax({
            url: this.baseURL + 'load/deal_data',
            method: 'post',
            data: {
                data: {
                    db: {
                        dbName: config.db.name,
                        t: config.db.t
                    },
                    data: '',
                    op: {
                        op: 'select',
                        con: 'limit,' + config.pageNum + ";offset,0;target," + id
                        //con: 'limit,10;offset,0'
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

                if (obj.status === "ok") {
                    if (obj.data) {
                        if (obj.data.pager)
                            _this._resultPager(obj.data.pager);
                        _this._createTableBody(obj.data.data, config, tmp);
                    }
                } 
            }
        });

        this.setDB(tmpDB.t, tmpDB.name);
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
            html += '<td class="gr-d-grid-head-cell" style="width: 30px;" rowspan=2><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox" class="check_all"></div></td>';

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
        $(tNode).append(html);
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
            map = con.bodyContent, idIdx = 0;

        console.time('createTableBody');
        for (len = data.length; i < len; i++) {
            // 重置索引
            idIdx = 0;
            tmp = data[i];
            html += '<tr class="table-row-has-event">';

            if (con.hasCheckBox)
                html += '<td class="gr-d-grid-cell field-checkbox" style="width: 30px;"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap"><input type="checkbox"></div></td>';

            //console.log(tmp);
            for (var o in tmp) {
                if (map[o]['isShow']) {
                    idIdx++;
                    html += '<td class="gr-d-grid-cell" id="'+ idIdx +'$FIELD$' + o + '"><div class="gr-d-grid-cell-inner gr-d-grid-cell-nowrap grid-cell-show">' + tmp[o] + '</div>';

                    if (map[o]['canEdit']) {
                        //html += '<input type="text" value="' + tmp[o] + '" class="grid-cell-edit">';
                        html += this._createFormByType(map[o]['type'], {
                            value: tmp[o],
                            valid: map[o]['valid'],
                            vals: map[o]['sureValue'], // select的option值
                            url: typeof map[o]['url'] === 'undefined' ? '' : map[o]['url']
                        });
                        html = html.substr(0, html.length - 1);

                        if (map[o]['isKey'])
                            html += ' key="true" name="' + o + '"';
                        html += '><div class="edited-and-no-save"></div>'
                    }
                    
                    html += '</td>';
                // HACK 数据配置中不显示的字段也应该在页面中出现，为后面的更新操作服务
                } else {
                    html += '<td class="gr-d-grid-cell" style="display:none;"><input type="hidden" value="'+ tmp[o] +'" name="'+ o +'"';
                    if (map[o]['isKey'])
                        html += ' key="true"';

                    html += '></td>';
                }
            }
            html += '</tr>';
        }

        $('.gr-d-grid-body tbody', tNode).append(html);
        console.timeEnd('createTableBody');
    },

    /*
     *  根据type返回设定好的表单信息
     *  @param {String} value
     *  @param [Object] o
     *  o: {
     *  value: '' 
     *  valid: '' // 验证规则
     *  vals: []
     *  }
     *  @return {String} html
     * */
    _createFormByType: function(type, o) {
        switch(type) {
            case "select":
                return this.COMPONENT.form.select(o);
            case "textarea":
                return this.COMPONENT.form.textarea(o);
            case "radio":
                return this.COMPONENT.form.radio(o);
            case "checkbox":
                return this.COMPONENT.form.checkbox(o);
            case "password":
                return this.COMPONENT.form.password(o);
            case "hidden":
                return this.COMPONENT.form.hidden(o);
            case "date":
                return this.COMPONENT.form.date(o);
            case "poup": // 弹出选择组件
                return this.COMPONENT.form.poup(o);
            default: 
                return this.COMPONENT.form.text(o);
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
    reDrawTableContent: function(data, tNode) {
        $('.gr-d-grid-body tbody tr', tNode).each(function(i) {
            if (i) {
                $(this).remove();
            }
        });
        hit._createTableBody(data, hit.CONFIG[tNode.attr('url')], tNode);
    },

    /*
     * 分页功能
     * @param {Object} pager
     * */
    _resultPager: function(pager, tNode) {
        var pNode = tNode ? $('#' + tNode.attr('target')) : $('#' + pager.target),
            p_idx = $('.selectPager', pNode),
            p_pages = $('span.gr-pager-pages', pNode),
            p_label = $('div.gr-pager-right', pNode),
            tmp = '',
            pages = Math.ceil(pager.pages / pager.perNum),
            conf = pNode.attr('url');

        conf = this.CONFIG[conf];

        // 重绘显示数量
        $('.pageNumSetting option', pNode).each(function() {
            if (this.value == conf.pageNum) {
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
        this.reloadPagerBtnStatus(pager.cur, pages, tNode);
    },

    /*
     * 刷新分页中按钮的状态
     * @param {Number} cur 当前页
     * @param {Number} pages 总的页数
     * */
    reloadPagerBtnStatus: function(cur, pages, _p) {
        var _first = $('span.gr-pager-first', _p),
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
    },

    /**
     *
     */
    findKeys: function(tNode) {
        var _input = tNode.find('input[key=true]'),
            keys = [];

        _input.each(function() {
            if ($(this).attr('key') === 'true') {
                keys.push({
                    name: $(this).attr('name'),
                    value: this.value
                });
            }
        });

        return keys;
    }
};

/*
 * 通用的异步load函数
 * */
;$(function() {
    var options = [
            {
               'id': 'nav-tree',
               'page': '../elements/tree'
			   //'page': '../elements/tab'
            },
            {
                'id': 'content',
                //'page': 'content'
				'page': '../elements/tab'
            }
        ], i = 0, len = options.length, o = {},

        base_url = hit.baseURL; //|| 'http://localhost/graduation-pro-2014/';

    for (; i < len; i++) {
        o = options[i];
        $('#' + o.id).load(base_url + "load/frameset/" + o.page);
    }
});
