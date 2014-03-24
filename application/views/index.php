<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>管理系统</title>
    <link rel="stylesheet" href="<?php echo base_url('static/css/common.css');?>" />
</head>
<body>
<div id="wrapper">
    <div class="header-wrap">
    </div>
    <header id="header">
        <h3>XX管理系统V0.1</h3>
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
    <div id="main" class="clearfix gap-top">
        <div id="nav-tree" class="pull-left">
        </div>
        <div id="content" class="pull-right">
        </div>
    </div>
    <div id="footer">
        <p class="footer-txt">Copyright &copy; 2014 哈尔滨工业大学</p>
    </div>
</div>
</body>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.resize.js');?>"></script>
</html>
