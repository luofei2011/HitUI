<?php
class Base extends CI_Model {

    private $tableName = "test";

    public function __construct() {
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function filter_target($in) {
        $this->tableName = $in['db']['t'];
        switch($in['op']['op']) {
            case "update":
                return $this->dbUpdate($in['data']);
            case "select":
                $con = $this->get_select_con($in['op']['con']);
                return $this->dbSelect($con);
            default:
                break;
        }
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
        return $this->format_return_data($this->dbQuery($sql, false), '');
    }

    public function dbSelect($arr) {
        $sql = "SELECT * FROM $this->tableName";

        // 得到记录数量
        $pages = $this->dbCountAllResult();

        if (array_key_exists('order', $arr)) {
            $order = explode(' ', $arr['order']);
            $this->db->order_by("$order[0]", "$order[1]");
        }

        if (array_key_exists('limit', $arr))
            $sql .= " LIMIT " . $arr['limit'];

        if (array_key_exists('offset', $arr)) {
            //var_dump($this->db->get($this->tableName, 50, 0)->result_array());
            $offset = (int)$arr['offset'] * (int)$arr['limit'];
            return $this->format_return_data($this->db->get($this->tableName, $arr['limit'], $offset)->result_array(), array(
                'pages' => $pages,
                'perNum' => $arr['limit'],
                'cur' => $arr['offset'] + 1,
            ));
        }

        return $this->format_return_data($this->dbQuery($sql), array(
            'pages' => $pages,
            'cur' => $arr['offset'] + 1,
            'perNum' => $arr['limit'],
        ));
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
        foreach($arr as $item) {
            $sql = "UPDATE $this->tableName SET ". $item['q'] ." WHERE id=" . $item['id'] . "";
            $this->dbQuery($sql, false);
        }

        return $this->format_return_data();
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

    /*
     * 获取类型为select时的条件
     * */
    private function get_select_con($str) {
        $conArr = array();
        $cons = explode(';', $str);

        foreach($cons as $conStr) {
            $arr = explode(',', $conStr);
            $conArr[$arr[0]] = $arr[1];
        }

        return $conArr;
    }

    /*
     * 获取表中的所有记录数
     * */
    private function dbCountAllResult() {
        return $this->db->count_all_results($this->tableName);
    }

    /*
     * 返回数据按照协议格式化
     * */
    private function format_return_data($data = "", $pager = "") {
        return array(
            "data" => $data,
            "pager" => $pager
        );
    }
}
?>
