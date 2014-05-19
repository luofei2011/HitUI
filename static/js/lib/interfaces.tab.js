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
		 *		[String] type 标签页类型,
		 *		[String] content 
		 * ]
		 * 转换成component.tab的统一入口，格式如下
		 * @output [Array] tabNames 标签页title的名字 [
		 *				[String] name,
		 *				[String] id,
		 *			]
		 * @output [Array] contents 标签页的内容 [
		 *				[String] id,
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
				//create tab title
				var tabNames = new Array();		//about tab title
				var contents = new Array();		//about tab content
				for ( var i = 0, len = options.tabs.length; i < len; i++ ) {
					// title
					var temObj = { 
						name: options.tabs[i].tabName, 
						id: options.tabs[i].id 
					};
					tabNames.push(temObj);

					// content
						var temObj = { 
							id: options.tabs[i].id, 
							view: options.tabs[i].content, 
							type: options.tabs[i].type
						};

					/*
					if ( options.tabs[i].content ) {
					//不为空，直接输出
						var temObj = { 
							id: options.tabs[i].id, 
							view: options.tabs[i].content, 
							type: options.tabs[i].type
						};
					} else {
					//内容为空，让用户输入
						//打印输入框，抽象出提交处理函数
						if ( options.tabs[i].type == 'text' ) {
						//如果是text属性，说明内容已经给出，直接打印即可
							var temObj = { 
								id: options.tabs[i].id, 
								view: contentInput,
								type: options.tabs[i].type
							};
						} else if ( options.tabs[i].type == 'page' ) {
						//如果是page属性，说明内容在给定的链接里，需加载该链接
						//TODO:ajax 加载，记得post layer
							var temObj = { 
								id: options.tabs[i].id, 
								view: linkInput,
								type: options.tabs[i].type
							};
						} else {
						}
					}
					*/
					contents.push(temObj);

				}

				//create tab title & framework
				tabNames.sort( function(a,b) {
					return a.id - b.id;
				});

				hit.COMPONENT.tab.createTabNames(tabLayer, tabNames);

				//create tab content
				contents.sort( function(a,b) {
					return a.id - b.id;
				});

				for ( var i = 0, len = contents.length; i < len; i++ ) {
					hit.COMPONENT.tab.fillContent(tabLayer, contents[i].id, contents[i].view, contents[i].type);
				}
			}

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

