<?php
require_once 'db_config.php';

$db = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

mysql_select_db('graduation', $db);

for ($i = 0; $i < 10; $i++) {
    $query = "INSERT INTO test values('', 'test@gmail.com', '测试用户', '学生', '2013-08-04', '男', '计算机', '计算机')";
    $result = mysql_query($query, $db);
    if ($result)
        echo "插入成功\n";
}

mysql_close($db);
?>
