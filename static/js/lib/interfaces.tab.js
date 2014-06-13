/*
 * lib/interfaces.tab.js, 负责控制tab的数据交互的接口
 * @author: freemen
 * @date: 2014-05-13
 * */
;(function() {
	//不乱加全局变量，嗯。
	var contentInput = '<input type="text" name="tabcontentin" class="tabcontentin"><button class="upload-content">输入显示内容</button>';
	var linkInput= '<input type="text" name="tabcontentin" class="tabcontentin"><button class="upload-link">输入页面地址</button>';
	var iTab = {
		/*
		 * some setting
		 * */
		config: {}, 

		/*
		 * 根据设置配置tab
		 * [Object] options { 
		 * [Array] tabs 各个标签页的设置: [
		 * 		[String] tabName 标签页名,
		 *		[String] id ,
		 *		[String] seq,
		 *		[String] type 标签页类型,
		 *		[String] content 
		 * ]
		 * 转换成component.tab的统一入口，格式如下
		 * @output [Array] tabNames 标签页title的名字 [
		 *				[String] name,
		 *				[String] seq,
		 *				[String] id,
		 *			]
		 * @output [Array] contents 标签页的内容 [
		 *				[String] id,
		 *				[String] seq,
		 *				[String] view 加载的配置参数,
		 *				[String] type 加载标签页内容的方式,
		 *			]
		 * }
		 * */
		makeFromData : function( tabareaID, options ) {
			// hit.COMPONENT.tab.init(tabareaID);

			//将tab杂乱的seq整理为整齐的seq排好序再保存下来,为了显示时候能按序号显示
			options.tabs.sort( function(a,b) {
				return a.seq - b.seq;
			});
			var tabNames = new Array();		//about tab title
			var contents = new Array();		//about tab content
			for ( var i = 0, len = options.tabs.length; i < len; i++ ) {
				//---将tab杂乱的seq整理为整齐的seq
				options.tabs[i].seq = Number(i)+1;

				// title
				var temObj = { 
					name: options.tabs[i].tabName, 
					seq: options.tabs[i].seq,
					id: options.tabs[i].id, 
				};
				tabNames.push(temObj);

				// content
					var temObj = { 
						seq: options.tabs[i].seq, 
						id: options.tabs[i].id, 
						view: options.tabs[i].content, 
						type: options.tabs[i].type
					};
				contents.push(temObj);

			}
			//---将整理整齐的tab setting 保存下来
			options.tabNum = options.tabs.length;
			hit.PARAMETER.global.setTabOption(options);

			//create tab title & framework
			if ( !(hit.COMPONENT.tab.createTabNames(tabareaID, tabNames)) ){
				//TODO: if not good for creating tabs( maybe recurse too much), show error
				$('.tab-area#' + tabareaID).append("<h1>you get into too deep!</h1>");
				return false;
			}

			//create tab content
			for ( var i = 0, len = contents.length; i < len; i++ ) {
				hit.COMPONENT.tab.fillContent(tabareaID, contents[i].seq, contents[i].id, contents[i].view, contents[i].type);
			}
			
			//TODO:set focus
			hit.COMPONENT.tab.focusTab(tabareaID, $('.tab-area#' + tabareaID).find('.tabtitle').first().attr('tabid'));

		},

		/*
		 * add tabs
		 * [Array] tabInfos 标签页的信息（类似上面的options，但seq是自动分配的
		 * 	:[	[String]id, [String]tabName, [String]type, [String]content  ]
		 * */
		addTabs: function( tabareaID, tabInfos ) {
			//judge if already have the tab
			tabids = hit.COMPONENT.tab.getAllTabId( tabareaID );
			if (tabids.indexOf(tabInfos[0].id) !== -1) {
				hit.COMPONENT.tab.focusTab(tabareaID, tabInfos[0].id);
			} else {
				//get the max index of the tab
				option = hit.PARAMETER.global.getTabOption();
				// maxSeq = option.tabs[option.tabs.length - 1].seq;
				maxSeq = tabInfos.length;
				var formatedInfos = [];			//about the formated tabInfos
				var tabNames = new Array();		//about tab title
				var contents = new Array();		//about tab content
				for(var i=0, len = tabInfos.length; i<len; i++) {
					//formate the info to save
					formatedInfos[i] = {};
					formatedInfos[i].tabName = tabInfos[i].tabName;
					formatedInfos[i].type = tabInfos[i].type;
					formatedInfos[i].content = tabInfos[i].content;
					formatedInfos[i].id = tabInfos[i].id;
					formatedInfos[i].seq = maxSeq + i + 1;
					// title
					var temObj = { 
						name: formatedInfos[i].tabName, 
						id: formatedInfos[i].id,
						seq: formatedInfos[i].seq,
					};
					tabNames.push(temObj);

					// content
					hit.COMPONENT.tab.fillContent(tabareaID, formatedInfos[i].seq, formatedInfos[i].id, formatedInfos[i].content, formatedInfos[i].type);

					hit.PARAMETER.global.addTabs(formatedInfos[i]);
				}
				//create tab title & framework
				hit.COMPONENT.tab.createTabNames(tabareaID, tabNames);

				//TODO:now 设置隐藏,和设置焦点一样，应该抽象出来
				var tabarea = $('.tab-area[layerid='+tabareaID+']');
				for(var i=0, len=tabNames.length; i<len; i++) {
					tabarea.children('.tabcontent-area').children('.tabcontent[tabId='+tabNames[i].id+']').hide();
				}
			}
		},

		/*
		 * remove tab by id
		 *
		 * */
		rmTab: function( tabareaID , id ) {
			//TODO:在tabtitle那儿增加x，点击关闭用	
		},

		switch2Tab: function( tabareaID, id, tabName ) {
			//TODO:先判断页面是否存在，再判断切换还是添加
			var tem = [];
			var tabInfo = { content:"", tabName:tabName, type:'page', id: id};
			tem.push(tabInfo);
			this.addTabs(tabareaID, tem);
			//TODO: 切换标签页，并设置当前显示页
		},

		setTarget: function( tabID, targetID, targetFun ) {
			$('#'+tabID).attr({targetID: targetID, targetFun: targetFun});
		},

	};

	if ( hit.INTERFACES ) {
		hit.INTERFACES.tab = iTab;
	} else {
		hit.INTERFACES = {
			tab: iTab
		}
	}


})();

