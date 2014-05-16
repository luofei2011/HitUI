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
		label: '弹出层',
		db: {}
	},
	/*
	 * 初始化
	 */
	init: function(option, url) {
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
			db: option.db,
			tNode: $('#' + _id).find('div.hit-panel-body')
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
		var _tmpDB = hit.conf.db;

		hit.setDB(con.db.t, con.db.name);
		hit.query('load/deal_data', '', {
		    op: 'select',
		    con: 'offset,0;limit,50'
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
					_html += '<td><div>' + tmp + '</div></td>';
				}
				_html += '</tr>';
			}
			_html += '</table>';

			_table.append(_html);
			_html = '<div class="text-center gap-top gap-bottom"><a class="hit-button gap-right"><span class="hit-button-txt">确定</span></a><a class="hit-button gap-left"><span class="hit-button-txt">取消</span></a></div>';
			con.tNode.append(_table).append(_html);
		});

		// 恢复之前的database配置
		hit.conf.db = _tmpDB;
	}
}