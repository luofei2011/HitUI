/*
 * 测试用的配置文件demo
 * @author: luofei
 * @date: 2014-04-15
 * */

// 命名请尽量已table开头，避免和全局的变量冲突引起程序的异常
var table_test = {
    url: "http://localhost/graduation-pro-2014/load/deal_data",
    rows: 2, // 目前默认最高只支持2行
    isShowPaging: true, // 是否显示分页功能
    pageNum: 50, // 每页默认显示的数据条数
    hasCheckBox: true, // 是否显示全选，选择等按钮
    
    /**************数据库相关配置****************/
    db: {
        name: 'inv',
        t: 'inv_bill_detail'
    },
    /********************************************/

    hasQuery: true,
    qParam: [
        {
            name: 'Item_name', // 数据库中的字段名
            label: '名称',
            type: 'text', // 类型
            required: true // 是否允许为空
        },
        {
            name: 'Item_texture',
            label: '类型',
            type: 'text',
            required: false
        }
    ],

    /***************功能区相关配置***************/
    hasFunc: true, // 是否显示功能区
    funcArr: ['add', 'edit', 'delete', 'save'], // add, remove, save, edit, search
    /********************************************/

    /***************表头信息配置*****************/
    widthMsg: [200, 100, 100, 100, 100, 100, 100, 100,100,100,100,150,100,100,100,300], // 每列占用的宽度信息
    // 必须按照数据库中的顺序进行填写 
    headContent: [
        // 第一列
        [
            {
                'label': '订单号', // 名字
                'isFixed': true, // 是否可作为固定列
                'isOrdered': 'Bill_num', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '串号', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': 'Serial_num', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '类别编码', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '类别名', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '类别', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '单位', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '分类', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '质地', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': 'Item_gb', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '批次', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': 'Item_qty', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '价格', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': 'Item_price', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '数量', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': 'Item_sum', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '质量等级', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': 'Item_quality_degree', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': 'IO类型', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '文件路径', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            }
        ]
    ],
    /********************************************/

    /***************表格内容信息配置*************/
    // 可以无序
    bodyContent: {
        'Bill_num': {
            'isKey': true, 
            'isShow': true, 
            'align': 'left',
            'canEdit': false, 
            'type': 'text',  
            'valid': '',
            'sureValue': '',
            'minLen': '',
            'maxLen': ''
        },
        'Serial_num': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'text',  
            'valid': 'require;int',
            'sureValue': '',
            'minLen': '',
            'maxLen': ''
        },
        'Item_code': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'text',  
            'valid': 'require',
            'sureValue': '',
            'minLen': '',
            'maxLen': 20
        },
        'Item_name': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': false, 
            'type': 'text',  
            'valid': 'require',
            'sureValue': '',
            'minLen': '',
            'maxLen': ''
        },
        'Item_type': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'text',  
            'valid': 'require',
            'sureValue': '', 
            'minLen': '',
            'maxLen': ''
        },
        'date': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'date',  
            'valid': 'require',
            'sureValue': '', 
            'minLen': '',
            'maxLen': ''
        },
        'sex': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'select',  
            'valid': 'require',
            'sureValue': ['男', '女'], 
            'minLen': '',
            'maxLen': ''
        },
        'college': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'text',  
            'valid': 'require',
            'sureValue': '', 
            'minLen': '',
            'maxLen': ''
        },
        'professional': {
            'isKey': false, 
            'align': 'left',
            'isShow': true, 
            'canEdit': false, 
            'type': 'text',  
            'valid': 'require',
            'sureValue': '', 
            'minLen': '',
            'maxLen': ''
        }
    }
    /********************************************/
};
