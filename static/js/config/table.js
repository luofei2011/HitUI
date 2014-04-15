/*
 * 测试用的配置文件demo
 * @author: luofei
 * @date: 2014-04-15
 * */

// 命名请尽量已table开头，避免和全局的变量冲突引起程序的异常
var table_test = {
    url: '',
    rows: 2,
    isShowPaging: true, // 是否显示分页功能
    pageNum: 50, // 每页默认显示的数据条数
    hasCheckBox: true, // 是否显示全选，选择等按钮
    
    /**************数据库相关配置****************/
    db: {
        name: '', // 选择的数据库
        t: '' // 数据表
    }
    /********************************************/

    /***************功能区相关配置***************/
    hasFunc: true, // 是否显示功能区
    funcArr: ['add', 'remove', 'save'], // add, remove, save, edit, search
    /********************************************/

    /***************表头信息配置*****************/
    widthMsg: [], // 表格中每个单元格的宽度配置信息 PS: 和需要显示的字段设置成一致，不许要设定checkbox的宽度
    headContent: [
        // 第一列
        [
            {
                'label': '', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left', // 对其方式：center，left，right
                'multiply': false, // 是否会占用多行
                'colspan': 2
            }
        ],
        // 第二列
        [
            {
                'label': '', // 名字
                'isFixed': false, // 是否可作为固定列
                'isOrdered': false, // 是否可排序
                'align': 'left' // 对其方式：center，left，right
            }
        ]
    ],
    /********************************************/

    /***************表格内容信息配置*************/
    bodyContent: [
        // 已数据库的表名作为主键
        'field': {
            'isKey': false, // 是否为主键
            'isShow': true, // 是否会在页面中显示
            'align': 'left',
            'canEdit': true, // 是否可编辑
            /*
             * type为该单元格显示的数据类型，规则等相关信息
             * 取值:
             *      date: 日期
             *      text: 文本
             *      textarea: 多行文本
             *      select: 选择框，和sureValue相结合使用
             *      radio
             *      checkbox
             *      hidden
             *      password
             */
            'type': 'text',  
            /*
             * 下面的参数可和上面的相结合使用:
             *      email: 邮件
             *      phone: 电话
             *      float: 浮点数
             *      int: 整数
             *      require: 不能为空 
             *      size: 是否会验证长度信息, 可配置参数minLen,maxLen相结合使用
             * */
            'valid': 'require;email',
            'sureValue': ['男', '女'], // 当'type'字段的选择为'select'时该配置信息会生效
            'minLen': '',
            'maxLen': ''
        }
    ]
    /********************************************/
};
