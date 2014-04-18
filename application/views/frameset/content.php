<link rel="stylesheet" href="<?php echo base_url('static/css/content/table.css');?>" />
<div class="gr-container">
    <h2>Datagrid 数据表格</h2>
    <div class="gr-table">
        <!--表格功能区-->
        <div class="gr-toolbar">
        </div>
        <!--功能区结束-->
        <!--表格区域-->
        <div class="gr-border">
        </div>
        <!--表格区域结束-->
        <!--分页功能-->
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
        <!--分页结束-->
        <div class="hit-resizer-trigger"></div>
    </div>
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_test.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/event.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/component.form.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/form.rule.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/grid.cover.js');?>"></script>
<script type="text/javascript">
// 首先配置网站路径
hit.baseURL = "<?php echo base_url();?>";
// 然后导入配置参数
hit.conf = table_test;
// 渲染表格
hit.load(table_test, 'gr-border');
</script>
<script type="text/javascript" src="<?php echo base_url('static/js/plugin/My97DatePicker/WdatePicker.js');?>"></script>
