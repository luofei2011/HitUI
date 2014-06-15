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
	init: function(option, conf, pNode, type) {
		var _html = "", _poup,
			_id = "POUP_" + (+new Date()),
			type = type || 'select',
			_this = this;

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

		if (type === 'select') {
			this.load({
				conf: conf,
				tNode: $('#' + _id).find('div.hit-panel-body'),
				tID: _id,
	            pNode: pNode
			});
		} else if (type === 'poup') {
			this.append({
				conf: conf, // 该conf为html字符串
				tNode:  $('#' + _id).find('div.hit-panel-body'),
				tID: _id,
				pNode: pNode
			});
		} else if (type === 'page') {
			// $('#' + _id).find('div.hit-panel-body').load(conf.url, function() {
			// 	$('#' + _id).find('div.hit-panel-body').append(_this.createBtn());
			// });
			this.multi_select({
				conf: conf,
				tNode: $('#' + _id).find('div.hit-panel-body'),
				tID: _id,
				pNode: pNode
			});
		}
	},

	multi_select: function(con) {
		var _tmpDB = {
                name: hit.conf.db.name,
                t: hit.conf.db.t
            }, _this = this,
            conf = con.conf, exist = [],
            _this = this;

        hit.setDB(conf.target.t, conf.target.name);
        hit.query('load/deal_data', [{name: conf.info.name, value: conf.info.value}], {
        	op: 'select',
        	con: 'offset,0;limit,50;fields,true;pager,false'
        }, function(data) {
        	var i = 0, len = data.length;

        	for (; i < len; i++) {
        		exist.push(data[i][conf.auth.name]);
        	}

        	 // 查询数据
			hit.setDB(conf.list.t, conf.list.name);
			hit.query('load/deal_data', '', {
			    op: 'select',
			    con: 'offset,0;limit,50;fields,true;pager,false'
			}, function(data) {
				var _table = $('<div class="poupWrapper"></div>'),
					_html = "", i = 0,
					len = data.length,
					tmp;

				for (; i < len; i++) {
					tmp = data[i][conf.auth.name];
					if (exist.indexOf(tmp) === -1) {
						_html += '<div style="display:inline-block;"><input type="checkbox" value="' + tmp + '" name="' + conf.auth.name + '">';
						_html += '<span>' + tmp + '</span></div>';
					}
				}

				if (!_html)
					_html = '<div>已没有更多的权限可用于分配！</div>';
				_table.append(_html);
				con.tNode.append(_table).append(_this.createBtn());

				_this.pageEvent(con);
			});
        });

		// 恢复之前的database配置
		hit.setDB(_tmpDB.t, _tmpDB.name);
	},

	pageEvent: function(con) {
		var panel = $('#' + con.tID),
			conf = con.conf;

		// 确定按钮事件
		$('a.poup-sure', panel).on('click', function() {
			var _tmpDB = {
	                name: hit.conf.db.name,
	                t: hit.conf.db.t
            	}, q = [], _this = this;

            hit.setDB(conf.target.t, conf.target.name);

            $('input[type=checkbox]', con.tNode).each(function() {
            	if (this.checked) {
            		q.push([{
            			name: $(this).attr('name'),
            			value: this.value
            		}, {
            			name: conf.info.name,
            			value: conf.info.value
            		}]);
            	}
            });

            if (q.length) {
	            // 生成cover层
			    hit.COVER.init({
			        tNode: $(this).closest('div.hit-panel-body'),
			        status: 'wait'
			    });
			   
			    hit.query('load/deal_data',q, {
			        op: 'insert',
			        con: ''
			    }, function() {
			        hit.COVER.removeNode();
					$(_this).next().trigger('click');
			    });
			} else {
				$(_this).next().trigger('click');
			}

            // 触发原来的自定义事件
            // con.pNode.trigger('select', data);
            hit.setDB(_tmpDB.t, _tmpDB.name);
			return false;
		});

		// 取消按钮事件绑定
		$('a.poup-cancel', panel).on('click', function() {
			$(this).closest('.hit-panel').find('span.close-btn').trigger('click');
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
			_html = _this.createBtn();
			con.tNode.append(_table).append(_html);

			// 绑定事件
			_this.addEvent_poup(con);

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

	append: function(con) {
		var wrapper = $('<div class="poupWrapper"></div>'),
			formareaID = hit.PARAMETER.global.registerComponent('form', 'formarea');

		node = $('<div class="form-area" id=' + formareaID + '></div>');
		wrapper.append(node);

		//若有post设置，则按post的创建，若没有，则使用默认的设置
		tableCon = con.conf;
		if (tableCon != "") {
			try {
				if (tableCon.length) {
					for (var i = 0, len = tableCon.length; i < len; i++) {
						hit.INTERFACES.form.appendForm2(node, tableCon[i], formareaID);
					}
				}
			} catch(e) {
				console.log(e);
			}
		} else {
			hit.INTERFACES.form.appendForm2(node, hit.CONFIG.form_test[0], formareaID);
			
		}

		con.tNode.append(wrapper).append(this.createBtn());

		this.addEvent_select(con);
	},

	createBtn: function() {
		return '<div class="text-center gap-top gap-bottom"><a class="hit-button gap-right poup-sure"><span class="hit-button-txt">确定</span></a><a class="hit-button gap-left poup-cancel"><span class="hit-button-txt">取消</span></a></div>';
	},

	addEvent_select: function(con) {
		var panel = $('#' + con.tID);

		// 确定按钮事件
		$('a.poup-sure', panel).on('click', function() {
			var isChecked = false, 
				forms = panel.find('form'),
				data = [];

			forms.each(function() {
				var obj = {
						data: [],
						keys: []
					},
					_inputs = $(this).find('input, textarea, select');

				obj.db = {
					name: $(this).attr('dbname'),
					t: $(this).attr('dbtable')
				};
				_inputs.each(function() {
					var p = $(this).closest('div');
					if (p.attr('name')) {
						obj.data.push({
							name: p.attr('name'),
							value: $(this).val()
						});
					}

					if ($(this).attr('key') == 'true') {
						obj.keys.push({
							name: p.attr('name'),
							value: ''
						});
					}
				});

				data.push(obj);
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
	},

	/**
	 * 绑定事件，最基本的。弹出层中的checkbox最多只能选择一个，且点击确定的时候应该做js验证
	 * @param {Object} con [用户传递的配置信息]
	 */
	addEvent_poup: function(con) {
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
