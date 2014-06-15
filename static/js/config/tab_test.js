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
				content: '<h1 style=\'text-align: center\'>欢迎来到<br/><br/><div style="font-size:larger"><div style="font-size:larger">企业智能计算中心</div><br/>库存管理系统</div></h1>',
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
