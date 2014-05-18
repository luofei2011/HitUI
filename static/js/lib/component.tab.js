/*
 * lib/component.tab.js 标签组件：标签页导航结构
 * @author: freemen
 * @date: 2014-05-16
 * */

;(function() {
//不随便添加全局变量

	var tabDef = {
		/*
		 * 用tabLayer初始化该层的tab-area
		 * @param [String] tabLayer 
		 * */
		init: function( tabLayer ){
			if ( tabLayer == '1' ) {
				$('.tab-area').attr('layerId', '1' );
			} else {
				$('.tab-area[layerId=' + (Number(tabLayer)-1).toString() + ']').append('<div class="tab-area" layId=' + tabLayer + '></div>');
			}
		},

		/*
		 * 用createTabNames
		 * @param [String] layerId 所操作层数 
		 * @param [Object] tab tab标题{
		 * 		@param [Array] ids 对应tab id
		 * 		@param [Array] Names 对应tab title
		 * }
		 * */
		createTabNames: function( layerId, tabNames) {
			var thetab = $('.tab-area[layerId=' + layerId + ']');
			thetab.append('<div class=tabtitle-area></div><div class=tabcontent-area></div>');
			var tabtitles = thetab.find('.tabtitle-area');
			for (var i=0, len=tabNames.length; i<len; i++) {
				tabtitles.append('<div class=tabtitle tabId=' + tabNames[i].id + '>' + tabNames[i].name + '</div>');
			}
		},

		/*
		 * 用fillContent
		 * @param [String] layerId 所操作层数 
		 * @param [String] tabId 对应tab id 
		 * @param [String] content 显示内容 
		 * }
		 * */
		fillContent: function( layerId, tabId, content ) {
			var thecontent= $('.tab-area[layerId=' + layerId + '] .tabcontent-area');
			thecontent.append('<div class=tabcontent tabId=' + tabId + '>' + content + '</div>');

		},


	};

	//add tab to hit.COMPONENT
	if ( hit.COMPONENT ){
		hit.COMPONENT.tab = tabDef;
	} else {
		hit.COMPONENT = {
			tab : tabDef,
		}
	};

})();
