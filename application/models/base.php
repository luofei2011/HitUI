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
     * 根据参数插入数据库
     * $arr = array(
     *  'table' => '',
     *  'data' => array(),
     * );
     * */
    public function dbInsert($arr) {
        $sql = "INSERT INTO $arr->table values()";
        return $this->dbQuery($sql, false);
    }

    public function dbSelect($arr) {
        $sql = "SELECT * FROM $arr->table";
        return $this->dbQuery($sql);
    }

    /*
     * 根据数据更新数据库
     * $arr = array(
     *  'table' => '',
     *  'id' => '',
     *  'data' = array(
     *      'param' => 'value',
     *  );
     * );
     * */
    public function dbUpdate($arr) {
        $q = $this->formatSQL($arr->data);
        $sql = "UPDATE $arr->table SET $q WHERE id=$arr->id";
        return $this->dbQuery($sql, false);
    }

    /*
     * 根据参数对数据进行删除
     * $arr = array(
     *    'table' => '',
     *    'id' => 0,
     * );
     * */
    public function dbDelete($arr) {
        $sql = "DELETE FROM $arr->table WHERE id=$arr->id";
        return $this->dbQuery($sql, false);
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

    /*
     * 通用的数据数据转成能到数据库中进行查询的格式
     * */
    private function formatSQL($arr) {
        $result = "";
        foreach($arr as $key => $value) {
            $result .= "$key" . "=$value";
        }

        return $result;
    }
}
?>
