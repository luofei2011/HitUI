/*
 * lib/interfaces.tab.js, 负责控制tab的数据交互的接口
 * @author: freemen
 * @date: 2014-05-13
 * */
;(function() {
	//不乱加全局变量，嗯。
	var iTab = {
		/*
		 * some setting
		 * */
		config: {}, 


		/*
		 * 根据设置配置tab
		 * {Object} options { 
		 * {Array} tabs 各个标签页的设置: [
		 * 		{String} tabName 标签页名,
		 *		{String} tabType 标签页类型,
		 *		{String} content 
		 * ]
		 * }
		 * */
		makeFromData : function( tabLayer, options ) {
			if ( Number(tabLayer) > 10 ){
				alert("the tab layer could not be greater than 10");
			} else {
				hit.COMPONENT.tab.init(tabLayer);
				//create tab title
				var tabNames = new Array();		//about tab title
				var contents = new Array();		//about tab content
				for ( var i = 0, len = options.tabs.length; i < len; i++ ) {
					// title
					var temObj = { name: options.tabs[i].tabName, id: options.tabs[i].id };
					tabNames.push(temObj);
					// content
					if ( options.tabs[i].type == 'text' ) {
					//如果是text属性，说明内容已经给出，直接打印即可
						if ( options.tabs[i].content ) {
						//不为空，直接输出
							var temObj = { id: options.tabs[i].id, view: options.tabs[i].content };
							contents.push(temObj);
						} else {
						//内容为空，让用户输入
						//TODO:打印输入框，记得抽象出内容展示函数

						}
					} else {
					//如果是page属性，说明内容在给定的链接里，需加载该链接
					//TODO:ajax 加载，记得post layer
						if ( options.tabs[i].content ) {
						//不为空，直接加载页面，输出

							var temObj = { id: options.tabs[i].id, view: options.tabs[i].content };
							//contents.push(temObj);
						} else {
						//内容为空，让用户输入

						}
					}
				}

				tabNames.sort( function(a,b) {
					return a.id - b.id;
				});

				hit.COMPONENT.tab.createTabNames(tabLayer, tabNames);

				//create tab content
				contents.sort( function(a,b) {
					return a.id - b.id;
				});

				for ( var i = 0, len = contents.length; i < len; i++ ) {
					hit.COMPONENT.tab.fillContent(tabLayer, contents[i].id, contents[i].view);
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
