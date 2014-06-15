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
	DB$natservice$menu: {
		'0101': 'load/elements/define_period',	
		'0102': 'load/elements/define_ware',	
		'0103': 'load/elements/define_item',	
		'0104': 'load/elements/define_supplier',	
		'0105': 'load/elements/define_dept',	
		'0301': 'load/frameset/insert_order',
		'0302': 'load/frameset/order_check',
		'0303': 'load/frameset/order_deal',
		'0304': 'load/frameset/order_query'
	},

};