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
		makeFromData : function( tabLayer, options ) {
			if ( Number(tabLayer) > 5 ){
				alert("the tab layer could not be greater than 5");
			} else {
				hit.COMPONENT.tab.init(tabLayer);
				//sort
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
				//---将tab杂乱的seq整理为整齐的seq,并保存下来
				options.tabNum = options.tabs.length;
				hit.PARAMETER.global.setTabOption(options);

				//create tab title & framework
				hit.COMPONENT.tab.createTabNames(tabLayer, tabNames);

				//create tab content
				for ( var i = 0, len = contents.length; i < len; i++ ) {
					hit.COMPONENT.tab.fillContent(tabLayer, contents[i].seq, contents[i].id, contents[i].view, contents[i].type);
				}
				
				var tabarea = $('.tab-area[layerid='+tabLayer+']');
				tabarea.find('.tabtitle').first().attr('select','Y');
				tabarea.children('.tabcontent-area').children('.tabcontent').hide().end().children('.tabcontent').first().show();
			}

		},

		/*
		 * add tabs
		 * [Array] tabInfos 标签页的信息（类似上面的options，但seq是自动分配的
		 * 	:[	[String]id, [String]tabName, [String]type, [String]content  ]
		 * */
		addTabs: function( tabLayer, tabInfos ) {
			//get the max index of the tab
			option = hit.PARAMETER.global.getTabOption();
			tabNum = option.tabNum;
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
				formatedInfos[i].seq = tabNum + i;
				// title
				var temObj = { 
					name: formatedInfos[i].tabName, 
					id: formatedInfos[i].id,
					seq: formatedInfos[i].seq,
				};
				tabNames.push(temObj);

				// content
				hit.COMPONENT.tab.fillContent(tabLayer, formatedInfos[i].seq, formatedInfos[i].id, formatedInfos[i].content, formatedInfos[i].type);

				hit.PARAMETER.global.addTabs(formatedInfos[i]);
			}
			//create tab title & framework
			hit.COMPONENT.tab.createTabNames(tabLayer, tabNames);

			//TODO:now 设置隐藏
			var tabarea = $('.tab-area[layerid='+tabLayer+']');
			for(var i=0, len=tabNames.length; i<len; i++) {
				tabarea.children('.tabcontent-area').children('.tabcontent[tabId='+tabNames[i].id+']').hide();
			}
		},

		/*
		 * remove tab by id
		 *
		 * */
		rmTab: function( id ) {
		
		},

		switch2Tab: function( id ) {
			var tem = [];
			//不能没有Content
			var asdf = { content:"", tabName:'asdf', type:'text', id: id };
			tem.push(asdf);
			this.addTabs(1, tem);	
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

