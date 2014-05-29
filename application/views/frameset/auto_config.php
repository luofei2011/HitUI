<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自动配置文件生成功能</title>
</head>
<body>
<div id="wrapper">
    <form action="<?php echo base_url('load/auto_config');?>" method="post">
        <select id="" name="config_name">
            <option value="table">table</option>
            <option value="poup">poup</option>
        </select>
        <input type="submit" value="提交">
    </form>
</div>
</body>
</html>
