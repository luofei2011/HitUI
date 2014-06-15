if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.bind = {
	//the meaning of ids are different under different fields
	/**
	 * 设置不同场景域下，关键值与配置的绑定
	 * {Object} FIELD {
	 * 		{Key} KeyId : {Value} Config Name
	 * }
	 */
	menu: {
		'0105': 'load/elements/dept_define',	
		'0301': 'load/frameset/insert_order',
		'0302': 'load/frameset/order_check',
		'0303': 'load/frameset/order_deal',
		'0304': 'load/frameset/order_query'
	},

};