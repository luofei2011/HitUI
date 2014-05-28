/*
 * lib/component.tab.js 标签组件：标签页导航结构
 * @author: freemen
 * @date: 2014-05-16
 * */

;(function() {
//不随便添加全局变量

	var tabDef = {
		_contentInput : '<input type="text" name="tabcontentin" class="tabcontentin"><button class="upload-content">输入显示内容</button>', 
		_linkInput : '<input type="text" name="tabcontentin" class="tabcontentin"><button class="upload-link">输入页面地址</button>', 

		/*
		 * 用tabLayer初始化该层的tab-area
		 * @param [String] tabLayer 
		 * */
		init: function( tabLayer ){
			if ( tabLayer == '1' ) {
				$('.tab-area').attr('layerId', '1' );
			} else {
				$('.tab-area[layerId=' + (Number(tabLayer)-1).toString() + ']').find('.tab-area').attr('layerId', tabLayer);
			}
		},

		/*
		 * 用createTabNames
		 * @param [String] layerId 所操作层数 
		 * @param [Object] tab tab标题{
		 * 		@param [Array] ids 对应tab id
		 * 		TODO:@param [Array] seq 对应tab id
		 * 		@param [Array] Names 对应tab title
		 * 		TODO:@param [Array] Names 对应tab title
		 * }
		 * */
		createTabNames: function( layerId, tabNames) {
			var thetab = $('.tab-area[layerId=' + layerId + ']');
			var tabtitles = thetab.find('.tabtitle-area');
			if ( tabtitles.length <= 0 ) {
				thetab.append('<div class=tabtitle-area></div><div class=tabcontent-area></div>');
				var tabtitles = thetab.find('.tabtitle-area');
			}
			for (var i=0, len=tabNames.length; i<len; i++) {
				tabtitles.append('<div class=tabtitle tabId=' + tabNames[i].id + ' seq=' + tabNames[i].seq + '>' + tabNames[i].name + '</div>');
			}
			
		},

		/*
		 * 用fillContent增加内容
		 * @param [String] layerId 所操作层数 
		 * @param [String] tabId 对应tab id 
		 * @param [String] content 显示内容 
		 * TODO:@param [String] content 显示内容 
		 * }
		 * */
		fillContent: function( layerId, seq, tabId, content, type ) {
			var theContentArea= $('.tab-area[layerId=' + layerId + '] .tabcontent-area');
			var tabContent = theContentArea.find('.tabcontent[tabId='+tabId+']');
			if( tabContent.length <= 0 ) {
				theContentArea.append('<div class=tabcontent tabId=' + tabId + '></div>');
				var tabContent = theContentArea.find('.tabcontent[tabId='+tabId+']');
			}
			if ( content ) {
			//如果有内容(不考虑其他特殊设置)
				switch( type ) {
					case 'text':
						tabContent.append(content);
						break;
					case 'page': 
						this._loadPage( layerId, tabContent, content);
						break;
					default:
						break;
				}
			} else {
			//无内容，打印输入框，等待输入
				switch( type ) {
					case 'text':
						tabContent.append(this._contentInput);
						break;
					case 'page': 
						tabContent.append(this._linkInput);
						break;
					default:
						break;
				}
			}

		},

		//重新填满内容
		refillContent: function( theLayerId, thecontent, content, type ) {
			switch( type ) {
				case 'text':
					thecontent.empty().append(content);
					break;
				case 'page':
					//load the link
					//prevent to load base_url when nothing inputed
					if (!content) {
						break;
					}
					this._loadPage( theLayerId, thecontent, content );
					break;
				default:
					break;
			}
		},

		_loadPage: function( theLayerId, targetNode, link ) {
			targetNode.load(link, {layerId: Number(theLayerId)+1}, function( response, status) {
				switch( status ) {
					case 'success':
						break;
					case 'error':
						alert('404!');
						break;
					default:
						alert('err?');
						break;
				}
			}); 

		},

		/*
		 * add tab
		 *
		 * */
		addTab: function( options ) {
		
		},

		/*
		 * remove tab by id
		 *
		 * */
		rmTab: function( id ) {
		
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


