/*
 * 表单组件: 基于表格单元编辑功能中添加的组件，适用鱼所有的表格编辑功能
 * @author: luofei
 * @date: 2014-04-15
 * */

;(function() {
// 不能随意构造全局变量
var temform= {
        text: function(val, valid) {
            return '<input class="grid-cell-edit" type="text" valid="' + valid + '" value="' + val + '">';
        },
        select: function(val, valid, vals) {
            var html = "", i = 0,
                len = vals.length;

            for (; i < len; i++) {
                html += '<option value="' + vals[i] + '"';

                if (vals[i] === val)
                    html += ' selected';

                html += '>' + vals[i] + '</option>';
            }

            return '<select class="grid-cell-edit">' + html + '</select>';
        },
        radio: function(val, valid) {
            return '<input class="grid-cell-edit" type="radio" valid="' + valid + '" value="' + val + '">';
        },
        checkbox: function(val, valid) {
            return '<input class="grid-cell-edit" type="checkbox" valid="' + valid + '" value="' + val + '">';
        },
        date: function(val, valid) {
            return '<input class="grid-cell-edit Wdate" type="text" valid="' + valid + '" value="' + val + '">';
        },
        textarea: function(val, valid) {
            return '<textarea class="grid-cell-edit" valid="' + valid + '" value="' + val + '">';
        },
        password: function(val, valid) {
            return '<input class="grid-cell-edit" type="password" valid="' + valid + '" value="' + val + '">';
        },
        hidden: function(val, valid) {
            return '<input class="grid-cell-edit" type="hidden" valid="' + valid + '" value="' + val + '">';
        },
        /*
         * 用于生成统一的弹出选择功能
         * @param [String] val 传递的值
         * @param [String] valid 合法性规则
         * @param [String] url 异步加载的地址, 用于弹出层load的地址
         * @return [String] 构造好的html片段
         */
        poup: function(val, valid, url) {
            return '<span class="poup-select grid-cell-edit" url="'+url+'"> <span class="ps-border"><input type="text" class="ps-txt" value="'+val+'" valid="'+valid+'"><span class="ps-button"><span class="ps-btn-txt">...</span></span></span></span>';
        }
    };

    if ( hit.COMPONENT ){
    	hit.COMPONENT.form = temform;
    } else {
    	hit.COMPONENT = {
    		form: temform
    	}
    }
})();