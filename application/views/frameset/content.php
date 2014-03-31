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
                            <span class="hit-button-txt hit-button-icon icon-add">添加</span>
                        </a>
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-add">编辑</span>
                        </a>
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-remove">删除</span>
                        </a>
                        <a href="" class="hit-button">
                            <span class="hit-button-txt hit-button-icon icon-save">保存</span>
                        </a>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="gr-border">
            <div class="gr-d-grid-head">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td rowspan="2">1</td>
                        <td colspan="2" style="text-align: left;">2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </table>
                <div class="gr-d-grid-bg"></div>
            </div>
            <div class="gr-d-grid-body">
                <table>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
// 表格标题配置信息
var table = {
    url: '',
    rows: 2, // 目前默认最高只支持2行
    msg: [
        [
            {
                "name": '',
                "align": '', // 取值center,left,right
                "multiply": '', //是否占用多行
                "colspan": '' // 若为多行，行数为多少
            }
        ],
        [
            {
                "name": '',
                "align": ''
            }
        ]
    ]
};

// 解析配置数据并生成表格
hit.load(table.url, '', function() {
});
</script>
