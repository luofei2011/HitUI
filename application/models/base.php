<?php
class Base extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function test() {
        $sql = "SELECT * FROM test";
        return $this->dbQuery($sql);
    }

    public function insert_users($num) {
        for ($i =0; $i < $num; $i ++) {
            $sql = "INSERT INTO test values(NULL, 'test@gmail.com', '测试用户', '本科', '学生', '2013-08-04', '男', '计算机', '计算机')";
            $this->dbQuery($sql, false);
        }
    }

    /*
     * 通用的数据库查询函数
     * @param {SQL} $sql 数据库查询语句
     * */
    private function dbQuery($sql, $return = true) {
        $query = $this->db->query($sql);

        if ($return)
            return $query->result_array();
        else 
            return $query;
    }
}
?>
