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
/*		init: function( tabLayer ){
			if ( tabLayer == '1' ) {
				$('.tab-area').attr('tabareaID', '1' );
			} else {
				var parent = $('.tab-area[tabareaID=' + (Number(tabLayer)-1).toString() + ']');
				console.log(parent.width());
				if ( parent.width() >= 600 ) {
					parent.find('.tab-area').attr('tabareaID', tabLayer);
				} else {
					return false;
				}
			}
			return true;
		},
*/
		/*
		 * 用createTabNames
		 * @param [String] tabareaID 所操作层数 
		 * @param [Object] tab tab标题{
		 * 		@param [Array] ids 对应tab id
		 * 		TODO:@param [Array] seq 对应tab id
		 * 		@param [Array] Names 对应tab title
		 * 		TODO:@param [Array] Names 对应tab title
		 * }
		 * */
		createTabNames: function( tabareaID, tabNames) {
			var theTab = $('.tab-area#' + tabareaID );
			// avoid recurse too deep
			if (theTab.width() <= 1100 ) {
				return false;
			}
			var tabtitles = theTab.children('.tabtitle-area');
			if ( tabtitles.length <= 0 ) {
				//do not have any tab titilarea in this tab-area before, then we create one
				theTab.append('<ul class=tabtitle-area></ul><div class=tabcontent-area></div>'); var tabtitles = theTab.children('.tabtitle-area');
			}
			console.log(tabtitles);
			for (var i=0, len=tabNames.length; i<len; i++) {
				tabtitles.append('<li class=tabtitle tabId=' + tabNames[i].id + ' seq=' + tabNames[i].seq + '>' + tabNames[i].name + '<div class="littletabxx"></div></li>');
			}
			return true;
		},

		/*
		 * 用fillContent增加内容
		 * @param [String] tabareaID 所操作层数 
		 * @param [String] tabId 对应tab id 
		 * @param [String] content 显示内容 
		 * TODO:@param [String] content 显示内容 
		 * }
		 * */
		fillContent: function( tabareaID, seq, tabId, content, type ) {
			var theContentArea= $('.tab-area#' + tabareaID + ' .tabcontent-area');
			var tabContent = theContentArea.children('.tabcontent[tabid='+tabId+']');
			if( tabContent.length <= 0 ) {
				theContentArea.append('<div class=tabcontent tabid=' + tabId + ' tabtype=' + type + '></div>');
				var tabContent = theContentArea.children('.tabcontent[tabid='+tabId+']');
			}
			switch( type ) {
				case 'text':
					if ( content ) {
						tabContent.append(content);
					} else {
						tabContent.append(this._contentInput);
					}
					break;
				case 'page': 
					tabContent.attr('url', content);
					this._loadPage( tabareaID, tabContent, content);
					break;
				default:
					break;
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

		/*
		 * 异步加载页面，并传送数据
		 */
		_loadPage: function( tabareaID, targetNode, link ) {
			if ( link ) {
				targetNode.attr('url', link );
				// targetNode.load(link, {tabareaID: Number(theLayerId)+1}, function( response, status) {
				targetNode.load(link, '', function( response, status) {
					switch( status ) {
						case 'success':
							break;
						case 'error':
							console.log('404!');
							targetNode.append("<h2>不存在"+targetNode.attr('url')+"页面！请重新检查地址！</h2>");
							targetNode.append(hit.COMPONENT.tab._linkInput);
							break;
						default:
							console.log('err?');
							break;
					}
				}); 
			} else {
				//do not have link to load
				targetNode.append(this._linkInput);
			}
		},

		focusTab: function( tabareaID, id ) {
			var theTab = $('.tab-area#'+tabareaID);
			theTab.children('.tabtitle-area').children('.tabtitle').removeAttr('select');
			node = theTab.children('.tabtitle-area').children('.tabtitle[tabid=' + id + ']');
			node.attr('select','Y');

			info = hit.COMPONENT.tab.getTabInfo( node );
			hit.GLOBAL.function.offerInfo(theTab, info);
			// node.trigger('click'); 			//TODO:why no response?
			theTab.children('.tabcontent-area').children('.tabcontent').hide().end().children('.tabcontent[tabid=' + id + ']').show();
			
		},

		/*
		 * remove tab by id
		 *
		 * */
		rmTab: function( tabareaID, id ) {
			
		},

		removeTab: function( titleNode ) {
			theTab = titleNode.closest('.tab-area');
			tabareaID = theTab.attr('id');
			tabid = titleNode.attr('tabid');
			contentNode = theTab.children('.tabcontent-area').children('.tabcontent[tabid=' + tabid + ']');
			titleNode.remove();
			contentNode.remove();
			// default focus on the first tab
			firstid = theTab.find('.tabtitle').first().attr('tabid');
			this.focusTab(tabareaID, firstid);
		},

		/**
		 * getTabInfo 根据标签页抬头节点，获取标签页信息
		 * @param  {jQueryDOM} node 标签页抬头节点
		 * @return {Object} info 标签页信息,格式同interfaces.tab标准接口参数
		 */
		getTabInfo: function( node ) {
			theTab = node.closest('.tab-area');
			tabid = node.attr('tabid');
			var tabContent = theTab.children('.tabcontent-area').children('.tabcontent[tabid='+tabid+']')
			,type = tabContent.attr('tabtype')
			,content;
			switch( type ) {
				case 'text':
					content = tabContent.html();
					break;
				case 'page':
					content = tabContent.attr('url')
					break;
				default:
					break;
			}
			info = {
				tabName: node.html(),
				id: tabid,
				seq: (node.prevAll('.tabtitle').length + 1),
				type: type,
				content: content,
			};
			return info;
		},

		/**
		 * getAllTabId 根据标签区域id获取区域下的标签页id
		 * @param  {String} tabareaID 标签区域id
		 * @return {Array} tabids 区域下All标签页id
		 */
		getAllTabId: function( tabareaID ) {
			var theTab = $('.tab-area#' + tabareaID)
			, tabtitle = theTab.children('.tabtitle-area').children('.tabtitle')
			, i = 0, len = tabtitle.length
			, tabids = [];
			console.log('All the tabtitle');
			console.log(tabtitle);
			for(; i<len; i++) {
				tabids.push(tabtitle.eq(i).attr('tabid'));
			}
			return tabids;
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


