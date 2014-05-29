/*
 * 表单组件: 基于表格单元编辑功能中添加的组件，适用鱼所有的表格编辑功能
 * @author: luofei
 * @date: 2014-04-15
 * */

;(function() {
// 不能随意构造全局变量
var temform= {
        text: function(obj) {
            return '<input class="grid-cell-edit" type="text" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        select: function(obj) {
            var html = "", i = 0,
                len = obj.vals.length;

            for (; i < len; i++) {
                html += '<option value="' + obj.vals[i] + '"';

                if (obj.vals[i] === obj.value)
                    html += ' selected';

                html += '>' + obj.vals[i] + '</option>';
            }

            return '<select class="grid-cell-edit">' + html + '</select>';
        },
        radio: function(obj) {
            return '<input class="grid-cell-edit" type="radio" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        checkbox: function(obj) {
            return '<input class="grid-cell-edit" type="checkbox" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        date: function(obj) {
            return '<input class="grid-cell-edit Wdate" type="text" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        textarea: function(obj) {
            return '<textarea class="grid-cell-edit" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        password: function(obj) {
            return '<input class="grid-cell-edit" type="password" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        hidden: function(obj) {
            return '<input class="grid-cell-edit" type="hidden" valid="' + obj.valid + '" value="' + obj.value + '">';
        },
        /*
         * 用于生成统一的弹出选择功能
         * @param [String] val 传递的值
         * @param [String] valid 合法性规则
         * @param [String] url 异步加载的地址, 用于弹出层load的地址
         * @return [String] 构造好的html片段
         */
        poup: function(obj) {
            return '<span class="poup-select grid-cell-edit" url="'+obj.url+'"> <span class="ps-border"><input type="text" class="ps-txt" value="'+obj.value+'" valid="'+obj.valid+'" in="poup"><span class="ps-button"><span class="ps-btn-txt">...</span></span></span></span>';
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
