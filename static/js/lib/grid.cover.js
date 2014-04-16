/*
 * 通用覆盖层函数，当更新事件或者弹层事件发生的时候弹出遮盖层
 * @author luofei
 * @date 2014-04-16
 * */
hit.COVER = {
    /*
     * @param {Object} o 
     * o: {
     *      tNode: '', 目标节点
     *      status: '', 更新，新页面
     * }
     * */
    init: function(o) {
        var _cover = $('<div id="hitPoup"></div>');

        this._resize(_cover, {
            h: o.tNode.height(),
            w: o.tNode.width()
        });

        switch(o.status) {
            case 'wait':
                _cover.append(this._waiting);
                break;
            case 'load':
                break;
            default:
                break;
        };

        o.tNode.append(_cover);
    },

    /*
     * 移除cover层
     * */
    removeNode: function(tNode) {
        var _node = tNode || $('#hitPoup');

        if (_node)
            _node.remove();
    },

    /*
     * 内部私有函数，用于动态更新cover尺寸
     * */
    _resize: function(t, o) {
        t.height(o.h);
        t.width(o.w);
    },

    /*
     * 私有方法，当status为wait时创建等待图标
     * */
    _waiting: function() {
        var _in = $('<div class="poup-in-loadding"></div>');

        _in.append('<img src="' + hit.baseURL + 'static/img/loadding.gif' + '">');

        return _in;
    }
};
