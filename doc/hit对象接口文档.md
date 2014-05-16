### 介绍`hit`对象下的所有接口

以后没开发一个接口，需要来完善对应的接口文档。

#### `PLUGIN.poup`接口文档

生成一个可拖动，可配置的弹出层，里面可展示任何内容（数据库信息，html片段，或者一个页面）

1.需要引入的文件`static/js/lib/plugin.poup.js`

2.使用方法:

	hit.PLUGIN.poup.init({
		width: 600,
		height: 300,
		canMove: true, // 是否可拖动
		hasCloseBtn: true, // 是否有关闭按钮
		left: '',
		top: '',
		label: '弹出层',
		db: {
			name: 'dbName',
			t: 'tableName'
		}
	});
	
3.可查看的demo：[localhost/graduation-pro-2014/load/frameset/demo](http://localhost/graduation-pro-2014/load/frameset/demo);
