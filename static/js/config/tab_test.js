if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.tab_test = [
	{
		tabNum : 2,
		tabs : [
			{
				tabName: 'WELCOME', 
				id: 'index',
				seq: 1,
				type: 'text', 
				content: '<h1>欢迎来到企业智能计算中心库存管理系统</h1>',
			},
		],
	},{
		// tab setting 2
		tabs : [
			{
				tabName: 'TEST', 
				id: '001',
				seq: 2,
				type: 'default', 
				content: '',
			},{
				tabName: 'tab_test', 
				id: '010',
				seq: 1,
				type: 'page', 
				// content: 'load/elements/tab',
			},
		],
	},
];
