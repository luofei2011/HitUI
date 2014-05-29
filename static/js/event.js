/******************全局事件绑定****************************/
$(document).on('mouseup', function() {
    hit.isMouseDown = false;
});
/**********************************************************/
// 表格行hover事件
$(document).on('mouseenter', 'tr.table-row-has-event', function() {
    $(this).addClass('gr-d-grid-row-hover');
}).on('mouseleave', 'tr.table-row-has-event', function() {
    $(this).removeClass('gr-d-grid-row-hover');
});

// 表格行点击事件
$(document).on('click', 'tr.table-row-has-event', function(e) {
    var _target = e.srcElement ? e.srcElement : e.target;

    if (_target.nodeName.toLowerCase() === 'input') {
        $(this).toggleClass('gr-d-grid-row-selected');
    }
});

// 全选事件
$(document).on('click', '#check_all', function() {
    var _this = this.checked;
    $('input[type=checkbox]', $('td.gr-d-grid-cell')).each(function() {
        var _parent = $(this).parent().parent().parent();
        if (_this) {
            this.checked = true;
            _parent.addClass('gr-d-grid-row-selected');
        } else {
            this.checked = false;
            _parent.removeClass('gr-d-grid-row-selected');
        }
    });
});

// 为添加事件出来的按钮绑定提交事件
$(document).on('click', 'a.new-field-sub', function() {
    var _tr = $(this).closest('tr'),
        _forms = $('input', _tr), _re = [];

    _forms.each(function() {
        _re.push({
            name: this.name,
            value: this.value
        });
    });

    // 生成cover层
    hit.COVER.init({
        tNode: $(this).closest('div.gr-border'),
        status: 'wait'
    });
   
    hit.query('load/deal_data', [_re], {
        op: 'insert',
        con: ''
    }, function() {
        $('div.edited-and-no-save').hide();
        hit.COVER.removeNode();
        _tr.remove();
    });
    return false;
});

// 所有的基本数据操作功能
$(document).on('click', 'span.hit-button-icon', function() {
    var op= $(this).attr('op');

    switch(op) {
        case "add":
            var _fTr = $('div.gr-d-grid-body tr').eq(1),
                _fTds = _fTr.children(), i = 0,
                len = _fTds.length,
                _html = "<tr>";

            for (; i < len; i++) {
                if (_fTds[i].id) {
                    // _field.push(_fTds[i].id.split('$').pop());
                    _html += '<td class="gr-d-grid-cell">';
                    _html += '<input type="text" name="' + _fTds[i].id.split('$').pop() + '"></td>';
                } else {
                    _html += '<td class="gr-d-grid-cell"><a href="#" class="new-field-sub"></a></td>';
                }
            }

            _html += '</tr>';

            $(_html).insertBefore(_fTr);
            break;
        case "save":
            var query = [];
            if ($('div.edited-and-error').length) {
                alert('修改有误！请检查标记区域。');
                return false;
            }

            $('.gr-d-grid-body').find('tr[isEdited="true"]').each(function(i) {
                query.push({
                    keys: hit.findKeys($(this)),
                    q: []
                });

                // 得到当前记录的修改数据
                $(this).find('div.edited-and-no-save').filter(function() {
                    return $(this).css('display') !== 'none';
                }).each(function() {
                    var _name = hit.filterID($(this).parent().attr('id'));
                    query[i].q.push({
                        value: $(this).prev().val(),
                        name: _name
                    });
                });
            });

            // 数据库操作
            if (query.length) {
                // 生成cover层
                hit.COVER.init({
                    tNode: $(this).closest('div.gr-toolbar').next(),
                    status: 'wait'
                });
               
                hit.query('load/deal_data', query, {
                    op: 'update',
                    con: ''
                }, function() {
                    $('div.edited-and-no-save').hide();
                    hit.COVER.removeNode();
                });
            } else {
                alert('未修改任何数据！');
            }
            break;
        case "delete":
            var _q = get_checked_field(),
                i = 0, _len = _q.node.length;

            if (!_q.id.length) {
                alert('未选中任何数据！');
                return false;
            }

            // 生成cover层
            hit.COVER.init({
                tNode: $(this).closest('div.gr-toolbar').next(),
                status: 'wait'
            });
           
            hit.query('load/deal_data', _q.id, {
                op: 'delete',
                con: ''
            }, function() {
                hit.COVER.removeNode();

                // 把记录从前端页面中删掉
                for (; i < _len; i++) {
                    _q.node[i].remove();
                };
            });
            break;
        case "edit":
            break;
        default:
            break;
    };

    function idInArray(arr, id) {
        var i = 0,
            len = arr.length;

        for (; i < len; i++) {
            if (arr[i]['id'] == id)
                return i + 1;
        }

        return false;
    };

    // 私有函数，得到选中的记录
    function get_checked_field() {
        var _re = {
            id: [],
            node: []
        };
        $('td.field-checkbox input[type=checkbox').each(function() {
            var _tr = $(this).closest('tr'),
                keys = hit.findKeys(_tr);

            if (this.checked) {
                //_re.id.push(_tr.attr('id').split('$').pop() * 1);
                _re.id.push(keys);
                _re.node.push(_tr);
            }
        });

        return _re;
    }

    return false;
});

// 表单单元双击可编辑
$(document).on('dblclick', 'div.grid-cell-show', function() {
    if ("textarea#input#select#span".indexOf($(this).next()[0].nodeName.toLowerCase()) !== -1) {
        $(this).hide();
        $(this).next().show().focus();
    } else {
        return false;
    }
});

// 不让双击选中文字
document.onselectstart = function() {
    return false;
};

// 让表格的表头和表内容部分当滚动的时候能联动
$(document).on('mousedown', 'div.gr-d-grid-view', function() {

    // 保证只在该节点上绑定了一个scroll事件
    if (!$._data(this, 'events') || !$._data(this, 'events')['scroll']) {
        $(this).bind('scroll', function() {
            var _sL = $(this).scrollLeft(), _col = $('table.colPoup'), _colHead = $('div.colHead');
            $('div.gr-d-grid-rowView').scrollLeft(_sL);

            if (_sL > 30 && _col) {
                _col.css('left', _sL + 'px');
                _colHead.css('left', _sL + 'px');

            } else {
                _col.css('left', '30px');
                _colHead.css('left', '30px');
            }
        });

        // 修正右滚动条带来的误差
        if (this.clientHeight !== this.offsetHeight) {
            var _gap = this.offsetHeight - this.clientHeight,
                _oldH = $('div.gr-d-grid-rowView').width();
            $('div.gr-d-grid-rowView').width(_oldH - _gap);
        }
    }
});

// 单元格编辑时的tab切换到下一单元事件
$(document).on('keydown', '.grid-cell-edit', function(e) {
    var _n = $(this).parent(), _f;
    if (e.keyCode === 9) {
        while(_n = _n.next()) {
            _f = $('input, textarea, select', _n);
            if (_f) {
                _f.prev().hide();
                _f.show().focus();
                break;
            }
        }
        e.preventDefault();
        e.stopPropagation();
    }
});

// 单元格编辑时事件
$(document).on('blur', '.grid-cell-edit', function() {
    var rule = [], i = 0,
        len,
        val = this.value;

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
    }

    for (len = rule.length; i < len; i++) {
        if (!hit.VALIDATE[rule[i]](this)) {
            $(this).prev().addClass('edited-and-error');
            return;
        }
    }

    // 若验证都通过了，则移除提示框
    $(this).prev().removeClass('edited-and-error');
});

// 日期选择插件事件
$(document).on('click', '.Wdate', function() {
    WdatePicker();
});

// 排序事件
$(document).on('click', 'span.grid-sort', function() {
    var _q = $(this).attr('tField');
    // 生成cover层
    hit.COVER.init({
        tNode: $(this).closest('div.gr-border'),
        status: 'wait'
    });
               
    // 需要按升序重排--asc
    if (this.className.indexOf('desc') !== -1) {
        $(this).removeClass('hit-grid-sortIcon-desc').addClass('hit-grid-sortIcon-asc');
        _q += ' ASC';
    // 需要按降序重排--desc
    } else if (this.className.indexOf('asc') !== -1) {
        $(this).removeClass('hit-grid-sortIcon-asc').addClass('hit-grid-sortIcon-desc');
        _q += ' DESC';
    }

    hit.query('load/deal_data', '', {
        op: 'select',
        con: 'offset,'+ ($('#selectPager').val() * 1 - 1) +';order,'+ _q +';limit,' + hit.conf.pageNum
    }, function(data) {
        hit.reDrawTableContent(data);
        hit.COVER.removeNode();
    });
});

// 分页事件
$(document).on('change', '#selectPager', function() {
    var offset = this.value * 1 - 1;

    // 生成cover层
    hit.COVER.init({
        tNode: $('div.gr-border'),
        status: 'wait'
    });

    // 更新数据
    hit.query('load/deal_data', '', {
        op: 'select',
        con: 'offset,'+ offset +';limit,' + hit.conf.pageNum
    }, function(data) {
        hit.reDrawTableContent(data);
        hit.COVER.removeNode();
    });
});

// 分页事件
$('div.gr-grid-pager a').on('click', function() {
    if (!$(this).hasClass('gr-btn-disabled')) {
        var _op = $('span', $(this)),
            pager = $('#selectPager'),
            cur = pager.val() * 1,
            pages = $('span.gr-pager-pages').text().split(' ').pop() * 1;

        if (_op.hasClass('gr-pager-first')) {
            hit.changePagerCur('', 1);
            hit.reloadPagerBtnStatus(1, pages);
        } else if (_op.hasClass('gr-pager-last')) {
            hit.changePagerCur('', pages);
            hit.reloadPagerBtnStatus(pages, pages);
        } else if (_op.hasClass('gr-pager-next')) {
            hit.changePagerCur('', cur + 1);
            hit.reloadPagerBtnStatus(cur + 1, pages);
        } else if (_op.hasClass('gr-pager-prev')) {
            hit.changePagerCur('', cur - 1);
            hit.reloadPagerBtnStatus(cur - 1, pages);
        } else if (_op.hasClass('gr-pager-reload')) {
            hit.changePagerCur('', cur);
        }

        // console.log('a.click');
        // 触发分页事件
        $('#selectPager').trigger('change');
    } 

    return false;
});

// 查询事件
$(document).on('click', '#query-btn', function() {
    var _fields = $(this).closest('fieldset').find('input'), _re = [];

    _fields.each(function() {
        if (this.value)
            _re.push({
                name: this.name,
                value: this.value
            });
    });

    if (!_re.length) {
        alert('未查询任何参数!');
        return false;
    }

    // 生成cover层
    hit.COVER.init({
        tNode: $('div.gr-border'),
        status: 'wait'
    });

    // 更新数据
    hit.query('load/deal_data', _re, {
        op: 'like',
        con: 'offset,'+ 0 +';limit,' + hit.conf.pageNum
    }, function(data) {
        hit.reDrawTableContent(data);
        hit.COVER.removeNode();
    });

    return false;
});

// 更改显示数量事件
$('#pageNumSetting').on('change', function() {
    hit.conf.pageNum = this.value * 1;

    hit.changePagerCur('', 1);
    $('#selectPager').change();
});

// 表格尺寸resize事件
$('div.hit-resizer-trigger').on('mousedown', function() {
    hit.isMouseDown = true;
});

// 固定列事件
$(document).on('click', 'span.fixed-col', function() {
    // 得到需要进行固定列的索引
    var _idx = $(this).closest('td').attr('id').split('$').pop(),
        _isFixed = $(this).attr('fixed'),
        _pTr = $(this).closest('tr').prev(),
        _tTD,tdIdx, _html = "", _width;

    $('td', _pTr).each(function(i) {
        var _id = this.id || "";
        if (_id.split('$').pop() === _idx) {
            _tTD = $(this);
            tdIdx = i;
            _width = _tTD.width();
            $(this).attr('temp', _width).css('width', 0);
        }
    });
    $(this).hide();

    _html = '<tr><td style="width: '+ _width +'px"></td></tr>';
    // _html += '<tr><td><div>' + $(this).closest('td')[0].children[0].innerHTML + '</div></td></tr>';

    $('td.gr-d-grid-cell', $('div.gr-d-grid-body')).each(function() {
        // 首先找到固定的索引
        if (this.id.split('$').shift() === _idx) {
            // 再判断是否固定属性
            // if (!_isFixed) {
                // $(this).addClass('fixed-col-bg');
                _html += '<tr><td><div>' + this.children[0].innerHTML + '</div></td></tr>';
            // }  else {
                // $(this).removeClass('fixed-col-bg');
            // }
        }
    });

    // $(this).closest('td').toggleClass('fixed-col-bg');
    // if (!_isFixed) {
    //     $(this).attr('fixed', true);
    // } else {
    //     $(this).attr('fixed', '');
    // }

    $('<td style="width: ' + _width + 'px"></td>').insertAfter(_pTr.find('td').eq(0));
    $('<td rowspan=2></td>').insertAfter($(this).closest('tr').find('td').eq(0));

    // 插入一个空白结点
    $('tr', $('div.gr-d-grid-body')).each(function(i) {
        var _td;
        if (i) {
            _td = '<td></td>';
        }  else {
            _td = '<td style="width: ' + _width + 'px"></td>';
            $(this).find('td').eq(tdIdx).css('width', 0);
        }

        $(_td).insertAfter($(this).find('td').eq(0));
    });

    // 创建table
    var _table = $('<table class="colPoup"></table>');
    _table.attr('id', _idx + '$INDEX$' + tdIdx);
    _table.css('width', _width + 'px');
    _table.append(_html);

    $('div.gr-d-grid-view').append(_table);
    $('div.gr-d-grid-rowView').append('<div class="colHead" style="width:'+_width+'px;height:'+$(this).closest('td').height()+'px;"><div>'+ $(this).prev()[0].innerHTML +'</div><span class="caret del-col"></span></div>');
});

// 撤掉冻结列
$(document).on('click', 'span.del-col', function() {
    var _col = $('table.colPoup'),
        _head = $('div.colHead'),
        _idx = _col[0].id.split('$').pop(),
        _pos = _col[0].id.split('$').shift(),
        _width,
        _td;

    _col.remove();
    _head.remove();

    // 删除插入的空白结点
    $('div.gr-border tr').each(function() {
        $(this).find('td').eq(1).remove();
    });

    // 删除头部
    _td = $('div.gr-d-grid-head tr').eq(0).find('td').eq(_idx);
    _width = _td.attr('temp');
    _td.css('width', _width + 'px');
    // 恢复头部的固定列按钮
    $('div.gr-d-grid-head tr').eq(1).find('td').each(function() {
        var _id = this.id || "";

        if (_id.split('$').pop() === _pos) {
            $(this).find('span.fixed-col').show();
        }
    });

    // 删除复制的内容部分
    _td = $('div.gr-d-grid-body tr').eq(0).find('td').eq(_idx).css('width', _width + 'px');

    // TODO 某些操作过后数据的刷新，如：改变每页显示数量，更新操作。
    
    // TODO 只支持单列的固定，暂时不能支持多列固定，需要完善。
});

// 弹出层的可拖动事件
$(document).on('mousemove', 'div.hit-panel-header-mask', function(e) {
    var _diff = {},
        _tNode = $(this).closest('.hit-window-drag');
        _oldPos = _tNode.offset(),
        _tNodeSize = {w: _tNode.width(), h: _tNode.height()},
        _winSize = {w: $(window).width(), h: $(window).height()},
        _targetPos = {};

    if (hit.isMouseDown) {
        _diff = {
            x: e.clientX - hit.mousePos.x,
            y: e.clientY - hit.mousePos.y
        };

        _targetPos.x = _oldPos.left + _diff.x;
        _targetPos.y = _oldPos.top + _diff.y;

        if (_winSize.w > _tNodeSize.w) {
            if (_targetPos.x < 0)
                _targetPos.x = 0;
            if (_targetPos.x + _tNodeSize.w > _winSize.w)
                _targetPos.x = _winSize.w - _tNodeSize.w;
        }
       
        if (_winSize.h > _tNodeSize.h) {
            if (_targetPos.y < 0)
                _targetPos.y = 0;
            if (_targetPos.y + _tNodeSize.h > _winSize.h)
                _targetPos.y = _winSize.h - _tNodeSize.h;
        }

        _tNode.css('left', _targetPos.x + 'px');
        _tNode.css('top', _targetPos.y + 'px');

        hit.mousePos.x = e.clientX;
        hit.mousePos.y = e.clientY;
    }
});
$(document).on('mousedown', 'div.hit-panel-header-mask', function(e) {
    hit.isMouseDown = true;
    hit.mousePos = {
        x: e.clientX,
        y: e.clientY
    };
});
// 弹出层关闭事件
$(document).on('click', '.close-btn', function() {
    $(this).closest('.hit-panel').remove();
});

// 弹出层事件
$(document).on('click', 'span.ps-button', function() {
    var url = $(this).closest('.poup-select').attr('url'),
        conf = hit.CONFIG[url];

	hit.PLUGIN.poup.init({
		left: 100,
		top: 10,
		label: '订单详情'
	}, conf);
});
