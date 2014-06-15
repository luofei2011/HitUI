<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>管理系统</title>
    <link rel="stylesheet" href="<?php echo base_url('static/css/common.css');?>" />
    <link rel="stylesheet" href="<?php echo base_url('static/css/common.addition.css');?>" />
    <link rel="stylesheet" href="<?=base_url('static/css/content/tab.css')?>" />
    <link rel="stylesheet" href="<?=base_url('static/css/content/tree.css')?>" />
    <link rel="stylesheet" href="<?php echo base_url('static/css/content/table.css');?>" />
</head>
<body>
<div id="wrapper">
    <div class="header-wrap">
    </div>
    <header id="header">
        <h3>库存管理系统V-1.0</h3>
        <div class="nav clearfix">
            <ul class="list-unstyled pull-right gap-right pull-right">
                <li>
                    <a href="#" class="hit-button hit-iconTop hit-button-plain">
                        <span class="hit-button-txt hit-button-icon hit-buttonTop icon-add">快捷</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="hit-button hit-iconTop hit-button-plain">
                        <span class="hit-button-txt hit-button-icon hit-buttonTop icon-edit">首页</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="hit-button hit-iconTop hit-button-plain">
                        <span class="hit-button-txt hit-button-icon hit-buttonTop icon-date">消息</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="hit-button hit-iconTop hit-button-plain">
                        <span class="hit-button-txt hit-button-icon hit-buttonTop icon-edit">设置</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="hit-button hit-iconTop hit-button-plain">
                        <span class="hit-button-txt hit-button-icon hit-buttonTop icon-close">关闭</span>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <!--网站整体部分-->
    <div id="main" class="clearfix gap-top">
        <!--网站左边导航部分-->
        <div id="nav-tree" class="pull-left">
        </div>
        <div class="spliter-handle">
            <div class="spliter-handle-button">
                <a href="" class="spliter-handle-icon-to-left"></a>
            </div>
        </div>
        <!--导航部分结束-->
        <!--右边信息处理展示部分-->
        <div id="content" class="pull-right">
        </div>
        <!--展示部分结束-->
    </div>
    <div id="footer">
        <p class="footer-txt">Copyright &copy; 2014 哈尔滨工业大学</p>
    </div>
</div>
</body>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/load.js');?>"></script>
<script type="text/javascript">
    hit.baseURL = "<?=base_url()?>";
</script>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.resize.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/component.form.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/form.rule.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/grid.cover.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/plugin.poup.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/plugin/My97DatePicker/WdatePicker.js');?>"></script>
<!--tab-->
<script type="text/javascript" src="<?=base_url('static/js/event.tab.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tab.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.tab.js');?>"></script>
<!--tree-->
<script type="text/javascript" src="<?=base_url('static/js/event.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.tree.js');?>"></script>
<!--form-->
<link rel="stylesheet" href="<?=base_url('static/css/content/theform.css')?>" />
<script type="text/javascript" src="<?=base_url('static/js/event.form.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.theform.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.form.js');?>"></script>
<!--global parameter-->
<script type="text/javascript" src="<?=base_url('static/js/config/bind_config.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/parameter.global.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/global.function.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/event.parameter.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/event.js');?>"></script>

<!-- 表格配置文件 -->
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_bill_main.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_test.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_poup.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/insert_stroge.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_item.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_supplier.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_period.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_ware.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_menu.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_sys_auth.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_role.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_role_auth.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_sys_user.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_user_role.js');?>"></script>
</html>
