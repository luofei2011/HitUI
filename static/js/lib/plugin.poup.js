/*
 * 插件开发，弹出层选择
 * @author luofei
 * @date 2014-05-16
 * */
if (typeof hit === "undefined")
	window.hit = {};

if (typeof hit.PLUGIN === "undefined")
	hit.PLUGIN = {};

// 通用的弹出层插件
hit.PLUGIN.poup = {
	// 默认参数
	default: {
		width: 600,
		height: 300,
		canMove: true,
		hasCloseBtn: true,
		left: '',
		top: '',
		label: '弹出层'
	},

	/*
	 * 初始化
	 */
	init: function(option, conf, pNode) {
		var _html = "", _poup,
			_id = "POUP_" + (+new Date());

		option = this.extend({}, this.default, option);

		_poup = $('<div class="hit-panel hit-window-drag"></div>');
		_poup.attr('id', _id);
		_poup.css({
			'width': option.width,
			'left': option.left,
			'top': option.top
		});

		_html = '<div class="hit-panel-border"><div class="hit-panel-header">';
		if (option.canMove)
			_html += '<div class="hit-panel-header-mask"></div>';
		_html += '<div class="hit-panel-header-title">'+ option.label +'</div>';
		if (option.hasCloseBtn)
			_html += '<span class="close-btn"></span>';
		_html += '</div><div class="hit-panel-body"></div></div>';

		$('body').append(_poup.append(_html));

		// 设置显示尺寸
		$('#' + _id).find('div.hit-panel-body').css({
			'height': option.height
		});

		this.load({
			conf: conf,
			tNode: $('#' + _id).find('div.hit-panel-body'),
			tID: _id,
            pNode: pNode
		});
	},
	/*
	 * 合并用户自定义的参数和默认参数
	 * @param [Object] target 合并后的对象
	 * @param [Arguments] 传递的合并数组，call形式
	 * @param [Object] target 合并后的对象
	 */
	extend: function(target) {
		var args = [].slice.call(arguments, 1),
			i = 0, len, key;

		for (len = args.length; i < len; i++) {
			for (key in args[i]) {
				target[key] = args[i][key];
			}
		}

		return target;
	},
	/*
	 * 根据url地址得到数据并拼接字符串
	 */
	load: function(con) {
		var _tmpDB = {
                name: hit.conf.db.name,
                t: hit.conf.db.t
            }, _this = this,
            conf = con.conf;

		hit.setDB(conf.db.t, conf.db.name);
		hit.query('load/deal_data', '', {
		    op: 'select',
		    con: 'offset,0;limit,50;fields,true;pager,false'
		}, function(data) {
			var _table = $('<div class="poupWrapper"></div>'),
				_html = "", i = 0,
				len = data.length,
				tmp = {};

			_html = '<table class="poupTable">';
			for (; i < len; i++) {
				_html += '<tr><td style="width:35px;"><div><input type="checkbox"></div></td>';

				for (var o in data[i]) {
					tmp = data[i][o];
                    if (conf.showFields.indexOf(o) !== -1)
					    _html += '<td class="poup-table-fields"><div name="' + find_map_field(o) + '">' + tmp + '</div></td>';
                    else
					    _html += '<td style="display:none;"><div name="' + find_map_field(o) + '">' + tmp + '</div></td>';
				}
				_html += '</tr>';
			}
			_html += '</table>';

			_table.append(_html);
			_html = '<div class="text-center gap-top gap-bottom"><a class="hit-button gap-right poup-sure"><span class="hit-button-txt">确定</span></a><a class="hit-button gap-left poup-cancel"><span class="hit-button-txt">取消</span></a></div>';
			con.tNode.append(_table).append(_html);

			// 绑定事件
			_this.addEvent(con);

            // 私有函数，找到映射的字段名
            function find_map_field(name) {
                var i, len,
                    obj = conf.fieldMap;

                for (i = 0, len = obj.length; i < len; i++) {
                    if (obj[i].origin == name) {
                        return obj[i].target;
                    }
                }

                return name;
            }
		});

		// 恢复之前的database配置
		hit.setDB(_tmpDB.t, _tmpDB.name);
	},

	/**
	 * 绑定事件，最基本的。弹出层中的checkbox最多只能选择一个，且点击确定的时候应该做js验证
	 * @param {Object} con [用户传递的配置信息]
	 */
	addEvent: function(con) {
		var panel = $('#' + con.tID),
		  	_inputs = $("#" + con.tID).find('input[type=checkbox]');

		_inputs.on('click', function() {
			var _this = this;
			_inputs.each(function() {
				if (this !== _this)
					this.checked = false;
			});

			this.checked = this.checked ? true : false;
		});

		// 确定按钮事件
		$('a.poup-sure', panel).on('click', function() {
			var isChecked = false, i = 0, len = _inputs.length,
				tmp, data = {};
			
			for (; i < len; i++) {
				if (_inputs[i].checked) {
					tmp = _inputs[i];
					isChecked = true;
					break;
				}
			}

			if (!isChecked) {
				alert('您未选择任何数据!');
				return false;
			} 

			// 获得选择的数据
			$(tmp).closest('tr').find('td.poup-table-fields div').each(function() {
				data[$(this).attr('name')] = $(this).text();
			});

			$(this).next().trigger('click');

            // 触发原来的自定义事件
            con.pNode.trigger('select', data);
			return false;
		});

		// 取消按钮事件绑定
		$('a.poup-cancel', panel).on('click', function() {
			$(this).closest('.hit-panel').find('span.close-btn').trigger('click');
		});
	}
}
