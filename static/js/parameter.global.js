/*
 * parameter.global.js 专放全局或局部变量，让界面组件之间进行交流
 * @author: freemen
 * @date: 2014-05-26
 * */

;(function() {
	var gParameter = {
		/*
		 * 数据存放格式，一般分为以下几项
		 * @param {Object} _data {
		 * 		{String} currentDataNode 当前聚焦的数据节点信息，通常指树节点,
		 * }
		 * */
		_data: {},

		_supportStorage: true,

		/*
		 * 存读HTML5方式存放的本地数据
		 * */
		_loadData: function( storage ) {
			this._data = JSON.parse(storage['globalParameter']);
			console.log(this._data);
		},

		_saveData: function( storage ) {
			storage['globalParameter'] = JSON.stringify(this._data);
		},

		clearData: function( storage ) {
			storage.removeItem('globalParameter');
			console.log('globalParameter cleared!');
		},

		initPara: function() {
			lStorage = window.localStorage;
			if ( lStorage ) {
				this._supportStorage = true;
				if ( lStorage['globalParameter'] ) {
					this._loadData( lStorage );
				}
			} else {
				this._supportStorage = false;
			}

		},

		//currentDataNode 当前聚焦的数据节点信息，通常指树节点,
		getCurrentDataNode: function() {
			return this._data.currentDataNode;
		},

		setCurrentDataNode: function( node ) {
			info = hit.INTERFACES.tree.getInfoByNode( node );
			console.log(info);
			this._data.currentDataNode = info.code;
			if (this._supportStorage) {
				this._saveData( window.localStorage );
			}
			//通知tab切换到currentDataNode
			hit.INTERFACES.tab.switch2Tab( info.code ,info.tabName );
		},

		//treeOption 树节点的配置信息
		getTreeOption: function() {
			return this._data.treeOption;
		},

		setTreeOption: function( treeOption ) {
			this._data.treeOption = treeOption;
			if (this._supportStorage) {
				this._saveData( window.localStorage );
			}
		},

		setTreeOpenNodes: function( openNodes ){
			this._data.treeOption.openNodes = openNodes;
			if (this._supportStorage) {
				this._saveData( window.localStorage );
			}
		},

		//tabOption 标签页节点的配置信息
		getTabOption: function() {
			return this._data.tabOption;
		},

		setTabOption: function( tabOption ) {
			this._data.tabOption = tabOption;
			if (this._supportStorage) {
				this._saveData( window.localStorage );
			}
		},

		addTabs: function( tabInfos ){
			this._data.tabOption.tabs.push(tabInfos);
			this._data.tabOption.tabNum = this._data.tabOption.tabs.length;
			this._saveData( window.localStorage );
		},
		
		rmTab: function( tabId ){

		},

		updateTabOption: function() {

		},

		/*
		 * 根据currentDataNode，进行刷新
		 *
		 * */
		updateCurrentDataNode: function( newDataNode ) {
			
		},
		
		/*
		 * 根据变量状态，进行刷新
		 *
		 * */
		update: function() {

		},

		_reg: [],

		/**
		 * get the register information of the components
		 * @return {Array} regComponent[
		 *         		{
		 *         			{String} component
		 *         			{String} id
		 *         			{Object} info; more information
		 *         		}
		 *         ]
		 */
		getRegInfo: function( type ) {

		},

		_saveRegInfo: function( component ) {

		},

		//TODO:统一给每一个界面component增加comID做标识
		//往global里注册组件，并分配comID
		registerComponent: function( component, type ) {
			id = type + '_' + (+new Date()) + '_' + Math.floor(Math.random() * 10);
			var com = {
				component: component,
				id: id,
			};
			this._saveRegInfo( com );
			return id;
		},

		clearRegInfo: function() {

		},


	};

	if ( hit.PARAMETER ){
		hit.PARAMETER.global = gParameter;
	} else {
		hit.PARAMETER = {
			global: gParameter
		}
	}
})();
