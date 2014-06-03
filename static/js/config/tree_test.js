if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.tree_test = {
	open: [
		'0102',
	],
	data: [
	/*
	 * addTreeNode( type, name, code, father, level, index, leafFlag, taskFlag, task)
	 * */
	{
		name: '羽毛球训练',
		code: 'root',
		father: '',
		level: '0',
		index: '1',
		leafFlag: 'N',
		taskFlag: '',
		task: '',
	},
	{
		name: '基本知识',
		code: '01',
		father: 'root',
		level: '1',
		index: '1',
		leafFlag: 'N',
		taskFlag: '',
		task: '',
	},
	{
		name: '羽毛球概念',
		code: '0101',
		father: '01',
		level: '2',
		index: '1',
		leafFlag: 'N',
		taskFlag: '',
		task: '',
	},
	{
		name: '什么是羽毛球',
		code: '010101',
		father: '0101',
		level: '3',
		index: '1',
		leafFlag: 'Y',
		taskFlag: '',
		task: '',
	},
	{
		name: '羽毛球姿势',
		code: '0102',
		father: '01',
		level: '2',
		index: '2',
		leafFlag: 'Y',
		taskFlag: '',
		task: '',
	},
	{
		name: '基本动作',
		code: '02',
		father: 'root',
		level: '1',
		index: '2',
		leafFlag: 'N',
		taskFlag: '',
		task: '',
	},
	{
		name: '挥拍',
		code: '0201',
		father: '02',
		level: '2',
		index: '1',
		leafFlag: 'Y',
		taskFlag: '',
		task: '',
	},
	],
}
