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

// 所有的基本数据操作功能
$(document).on('click', 'span.hit-button-icon', function() {
    var op= $(this).attr('op');

    switch(op) {
        case "add":
            break;
        case "save":
            /*
            var query = [];
            $('div.gr-d-grid-body tr').each(function() {
                var tmp = {}, isEdit = false;
                $('input:not([type=checkbox])', $(this)).each(function(i) {
                    if ($(this).css('display') !== 'none' || $(this).attr('type') === 'hidden') {
                        if ($(this).css('display') !== 'none')
                            isEdit = true;
                        tmp[i] = $(this).val();
                    }
                });
                if (isEdit)
                    query.push(tmp);
            });
            console.log(query);
            */
            var query = [];
            if ($('div.edited-and-error').length) {
                alert('修改有误！请检查标记区域。');
                return false;
            }

            $('div.edited-and-no-save').filter(function() {
                return $(this).css('display') !== 'none';
            }).each(function() {
                var _name = hit.filterID($(this).parent().attr('id')),
                    _id = hit.filterID($(this).closest('tr').attr('id')),
                    idx;

                idx = idInArray(query, _id);
                if (!idx) {
                    query.push({
                        id: _id * 1,
                        q: [{value: $(this).prev().val(), name: _name}]
                    });
                } else {
                    query[idx - 1].q.push({
                        value: $(this).prev().val(),
                        name: _name
                    });
                }
            });
            query = hit.convertToSQL(query);
            console.log(query);

            // 数据库操作
            if (query.length) {
                hit.query('load/deal_data', query, 'update', function() {
                    $('div.edited-and-no-save').hide();
                });
            } else {
                alert('未修改任何数据！');
            }
            break;
        case "delete":
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

    return false;
});

// 表单单元双击可编辑
$(document).on('dblclick', 'div.grid-cell-show', function() {
    $(this).hide();
    $(this).next().show().focus();
});

// 不让双击选中文字
/*
document.onselectstart = function() {
    return false;
};
*/

// 让表格的表头和表内容部分当滚动的时候能联动
$(document).on('mousedown', 'div.gr-d-grid-view', function() {

    // 保证只在该节点上绑定了一个scroll事件
    if (!$._data(this, 'events') || !$._data(this, 'events')['scroll']) {
        $(this).bind('scroll', function() {
            var _sL = $(this).scrollLeft();
            $('div.gr-d-grid-rowView').scrollLeft(_sL);
        });

        // 修正右滚动条带来的误差
        if (this.clientHeight !== this.offsetHeight) {
            var _gap = this.offsetHeight - this.clientHeight,
                _oldH = $('div.gr-d-grid-rowView').width();
            $('div.gr-d-grid-rowView').width(_oldH - _gap);
        }
    }
});

// 单元格编辑时事件
$(document).on('blur', '.grid-cell-edit', function() {
    var rule = [], i = 0,
        len;

    // 恢复隐藏状态
    if (this.value !== $(this).prev().text()) {
        // 显示当前为修改状态
        $(this).next().show();
    }
    $(this).hide().prev().text(this.value).show().height($(this).parent().height() - 4);

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
