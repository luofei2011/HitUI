/*
 * 测试用的配置文件demo
 * @author: luofei
 * @date: 2014-04-15
 * */

// 命名请尽量已table开头，避免和全局的变量冲突引起程序的异常
hit.CONFIG.table_test = {
    url: "http://localhost/graduation-pro-2014/load/deal_data",
    rows: 2, // 目前默认最高只支持2行
    isShowPaging: true, // 是否显示分页功能
    pageNum: 50, // 每页默认显示的数据条数
    hasCheckBox: true, // 是否显示全选，选择等按钮
    
    /**************数据库相关配置****************/
    db: {
        name: 'default',
        t: 'test'
    },
    /********************************************/

    hasQuery: true,
    qParam: [
        {
            name: 'email', // 数据库中的字段名
            label: '邮箱',
            type: 'text', // 类型
            required: true // 是否允许为空
        },
        {
            name: 'name',
            label: '姓名',
            type: 'text',
            required: false
        }
    ],

    condition: [],
    /***************功能区相关配置***************/
    hasFunc: true, // 是否显示功能区
    funcArr: ['add', 'edit', 'delete', 'save', 'add_poup'], // add, remove, save, edit, search
    /********************************************/

    /***************表头信息配置*****************/
    widthMsg: [100, 120, 100, 100, 120, 100, 150, 200], // 每列占用的宽度信息
    // 必须按照数据库中的顺序进行填写 
    headContent: [
        // 第一列
        [
            {
                'label': '邮箱', // 名字
                'isFixed': true, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '姓名', // 名字
                'isFixed': true, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '工作信息', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left', // 对其方式：center，left，right
                'multiply': true, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '创建日期', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': 'date', // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '性别', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '学院', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            },
            {
                'label': '专业', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'center', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            }
        ],
        // 第二列
        [
            {
                'label': '所属部门', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left' // 对其方式：center，left，right
            },
            {
                'label': '职位', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left' // 对其方式：center，left，right
            }
        ]
    ],
    /********************************************/

    /***************表格内容信息配置*************/
    // 可以无序
    bodyContent: {
        'id': {
            'isKey': true, 
            'isShow': false, 
            'align': 'left',
            'canEdit': false, 
            'type': 'hidden',  
            'valid': '',
            'sureValue': '',
            'minLen': '',
            'maxLen': ''
        },
        'email': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'email',  
            'valid': 'require',
            'sureValue': '',
            'minLen': '',
            'maxLen': ''
        },
        'name': {
            'isKey': false, 
            'isShow': true, 
            'align': 'left',
            'canEdit': true, 
            'type': 'text',  
            'valid': 'require;size',
            'sureValue': '',
            'minLen': '',
            'maxLen': 20
        },
        'department': {
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
        'position': {
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
