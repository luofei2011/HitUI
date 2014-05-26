/*
 * parameter.global.js 专放全局或局部变量，让界面组件之间进行交流
 * @author: freemen
 * @date: 2014-05-26
 * */

;(function() {
	var gParameter = {
//TODO:bug
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
		},

		_saveData: function( storage ) {
			storage['globalParameter'] = JSON.stringify(this._data);
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

		setCurrentDataNode: function( dataNode ) {
			this._data.currentDataNode = dataNode;
			if (this._supportStorage) {
				this._saveData( window.localStorage );
			}
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

	};

	if ( hit.PARAMETER ){
		hit.PARAMETER.global = gParameter;
	} else {
		hit.PARAMETER = {
			global: gParameter
		}
	}
})();
