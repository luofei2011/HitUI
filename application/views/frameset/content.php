<link rel="stylesheet" href="<?php echo base_url('static/css/content/table.css');?>" />
<div class="gr-container">
    <h2>Datagrid 数据表格</h2>
    <div class="gr-table">
        <!--表格功能区-->
        <div class="gr-toolbar">
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-add" op="add">添加</span>
                        </a>
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-add" op="edit">编辑</span>
                        </a>
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-remove" op="delete">删除</span>
                        </a>
                        <a href="javascript:void(0);" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-save" op="save">保存</span>
                        </a>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="gr-border">
        </div>
        <div class="gr-grid-pager">
            <div class="gr-pager clearfix">
                <div class="gr-pager-left">
                    <select id="pageNumSetting" name="" class="hit-button">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                    </select>
                    <span class="separator"></span>
                    <a href="javascript:void(0);" class="hit-button hit-button-plain" title="首页">
                        <span class="hit-button-txt gr-btn-iconOnly gr-pager-first"></span>
                    </a>
                    <a href="javascript:void(0);" class="hit-button hit-button-plain" title="上一页">
                        <span class="hit-button-txt gr-btn-iconOnly gr-pager-prev"></span>
                    </a>
                    <select id="selectPager" name="" class="hit-button">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <span>
                        <span class="gr-pager-pages">/ 2</span>
                    </span>
                    <a href="javascript:void(0);" class="hit-button hit-button-plain" title="下一页">
                        <span class="hit-button-txt gr-btn-iconOnly gr-pager-next"></span>
                    </a>
                    <a href="javascript:void(0);" class="hit-button hit-button-plain" title="尾页">
                        <span class="hit-button-txt gr-btn-iconOnly gr-pager-last"></span>
                    </a>
                    <span class="separator"></span>
                    <a href="javascript:void(0);" class="hit-button hit-button-plain" title="刷新">
                        <span class="hit-button-txt gr-btn-iconOnly gr-pager-reload"></span>
                    </a>
                </div>
                <div class="gr-pager-right">每页10条, 共19条</div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_test.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/event.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/component.form.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/form.rule.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/grid.cover.js');?>"></script>
<script type="text/javascript">
// 表格标题配置信息
var table = {
    url: "<?php echo base_url('load/get_data');?>",
    rows: 2, // 目前默认最高只支持2行
    widthMsg: [100, 120, 100, 100, 120, 100, 150, 200], // 每列占用的宽度信息
    hasCheckBox: true, // 没行结果是否带有单选框
    headMsg: [
        [
            {
                "name": '员工帐号',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            },
            {
                "name": '姓名',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            },
            {
                "name": '工作信息',
                "align": 'left', // 取值center,left,right
                "multiply": true, //是否占用多行
                "colspan": 2 // 若为多行，行数为多少
            },
            {
                "name": '创建日期',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            },
            {
                "name": '性别',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            },
            {
                "name": '学院',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            },
            {
                "name": '专业',
                "align": 'center', // 取值center,left,right
                "multiply": false, //是否占用多行
                "colspan": 1 // 若为多行，行数为多少
            }
        ],
        [
            {
                "name": '所属部门',
                "align": 'left'
            },
            {
                "name": '职位',
                "align": 'left'
            }
        ]
    ]
};

// 解析配置数据并生成表格
//hit.load(table, '', 'gr-border');
</script>
<script type="text/javascript">
//hit._createTableHead(table_test, 'gr-border');
hit.baseURL = "<?php echo base_url();?>";
hit.conf = table_test;
hit.load(table_test, 'gr-border');
</script>
<script type="text/javascript" src="<?php echo base_url('static/js/plugin/My97DatePicker/WdatePicker.js');?>"></script>
