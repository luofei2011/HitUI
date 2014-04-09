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
