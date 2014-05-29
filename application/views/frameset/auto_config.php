<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自动配置文件生成功能</title>
</head>
<body>
<div id="wrapper">
    <form action="<?php echo base_url('load/auto_config');?>" method="post">
        <div>
            <label for="">数据库名</label>
            <input type="text" value="inv" name="db">
        </div>
        <div>
            <label for="">表名</label>
            <input type="text" name="t">
        </div>
        <select id="" name="config_name">
            <option value="table">table</option>
            <option value="poup">poup</option>
        </select>
        <input type="submit" value="提交">
    </form>
</div>
</body>
</html>
