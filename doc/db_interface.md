## 对数据库的数据交互相关接口使用文档

#### 工作流程

1. 在JS脚本中引入`static/js/load.js` + 对`hit.conf`配置数据库 + 往hit.query(`url`,`data`,`op`,`func`)中传递四个对应参数
2. `url`赋值为'deal_data'后，将以AJAX方式Post到`controller/load.php`里面的`deal_data()`，专门负责数据库操作
3. 在`deal_data()`中，调用数据模型`models/base.php`中的`filter_target($in)`来统一操作数据库
4. 在`models/base.php`中，用`format_return_data($data, $pager)`来对返回数据进行封装，返回到`deal_data()`
5. 在`deal_data()`中，调用本地函数`format_return_data($data)`对数据再次封装，最后以JSON格式返回给JS脚本的AJAX
6. 在AJAX的返回数据处理函数中，调用最开始的参数`func`，处理数据库操作的返回数据

总共涉及`static/js/load.js`、`controller/load.php`、`models/base.php`三个文件

PS: 要使用该接口需要引入`static/js/load.js`文件

#### 前置条件

引入js文件后需要向该接口传递配置数据！！！，主要是数据库的配置数据。

	hit.conf = {
		'db': {
			'name': '', // 数据库名字
			't': '' // 表名
		}
	};
	
如果选择的数据库名字不是CI框架中default的数据库， 还需要在`application/config/database.php`中添加如下内容:

	// 网站相关信息的数据库
	$active_group = 'yourDBname';
	$active_record = TRUE;

	$db['yourDBname']['hostname'] = 'localhost';
	$db['yourDBname']['username'] = 'root';
	$db['yourDBname']['password'] = '';
	$db['yourDBname']['database'] = '';
	$db['yourDBname']['dbdriver'] = 'mysql';
	$db['yourDBname']['dbprefix'] = '';
	$db['yourDBname']['pconnect'] = FALSE;
	$db['yourDBname']['db_debug'] = TRUE;             //部署之后关闭
	$db['yourDBname']['cache_on'] = FALSE;
	$db['yourDBname']['cachedir'] = '';
	$db['yourDBname']['char_set'] = 'utf8';
	$db['yourDBname']['dbcollat'] = 'utf8_general_ci';
	$db['yourDBname']['swap_pre'] = '';
	$db['yourDBname']['autoinit'] = TRUE;
	$db['yourDBname']['stricton'] = FALSE;


#### POST数据接口

调用方式：

	hit.query(url, data, op, func);
  
参数详解：

1. url，请求的地址：请使用统一的地址`'deal_data'`.
2. data, 请求的数据，根据op类型的不同，data也不同。详情见后面对应op的解释.
3. op, 数据基本操作类型：`insert, delete, update, select`.
4. func, 回调函数，即通过AJAX得到数据后需要的处理函数.

DEMO CODE：

	hit.query('deal_data', '', {
		'op': 'select',
		'con': 'limit,50;offset,0;order,date'
	}, func); 
	
`func`是什么东西？

这是你需要处理返回数据的函数，比如我们把得到的数据输出，然后针对该需求我写了一个函数`test`：

	function test(data) {
		console.log(data)
	}

那么我该如何把这个函数和上面的`func`联系在一起呢？你只需要这样调用：

	hit.query('deal_data', '', {
		'op': 'select',
		'con': 'limit,50;offset,0;order,date'
	}, test); 
	
#### 数据库`INSERT`接口

DEMO CODE：

	// 支持连续插入N条数据，data域应按照该格式封装,注意，id不用传递，后台自动添加
	hit.query('deal_data', [
		[
			{
				'name': '', // 字段名
				'value': '', // 该字段的值
			},
			{
				'name': '', // 字段名
				'value': '', // 该字段的值
			},
			...
		],
		[
			// 插入的第二条数据...
		]
	], 
	{
		'op': 'insert',
		'con': ''
	}, func);
	
#### 数据库`DELETE`接口

DEMO CODE：

	hit.query('deal_data', [
		// 只需要传递id即可，可一次性删除多条数据
		1,2,3
	],
	{
		'op': 'delete',
		'con': ''
	}, func);
	
#### 数据库`UPDATE`接口

DEMO CODE

	// 有点类似`INSERT`接口, 支持多条数据的更新。
	hit.query('deal_data', [
		[
			{
				'id': '', // 该数据的id
				'q': [ // 更新的字段
					{ 
						'name': '', // 字段名
						'value': '', // 该字段的值
					},
					{ 
						'name': '', // 字段名
						'value': '', // 该字段的值
					},
					...
				]
			},
			{
				'id': '', // 该数据的id
				'q': [ // 更新的字段
					{ 
						'name': '', // 字段名
						'value': '', // 该字段的值
					},
					{ 
						'name': '', // 字段名
						'value': '', // 该字段的值
					},
					...
				]
			},
			...
		]
	], 
	{
		'op': 'update',
		'con': ''
	}, func);
	
#### 数据库`SELECT`接口

DEMO CODE：

	hit.query('deal_data', '', {
		'op': 'select',
		'con': 'limit,50;offset,0;order,name'
	}, func);
	
	// 查询参数data格式
	[
		{
			name: '', // 进行like查询的字段名
			value: '' // 需要进行查找的值
		},
		{
			name: '', // 进行like查询的字段名
			value: '' // 需要进行查找的值
		}
		...
	]
	
`con`字段详解：

该字段代表查询时的条件，包括三种情况：限制`limit`，偏移`offset`，排序`order`；不同条件用`;`隔开，条件的参数用`,`隔开。
其中`offset`字段默认为0就行，`order`字段如有排序需求，需要传递它在数据表中的字段名。
