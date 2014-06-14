if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.tab_test = [
	{
		tabNum : 2,
		tabs : [
			{
				tabName: 'TABLE', 
				id: 'table',
				seq: 2,
				type: 'page', 
				content: 'load/frameset/content',
			},{
				tabName: 'form',
				id: 'form',
				seq: 1,
				type: 'page',
				content: 'load/elements/index',
			},{
				tabName: 'delData',
				id: '3',
				seq: 3,
				type: 'text',
				content: '<div class="clear-global-parameter">clearData</div>',
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
