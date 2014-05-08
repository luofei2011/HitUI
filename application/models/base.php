<?php
class Base extends CI_Model {

    private $tableName = "test";
    private $db;

    public function __construct() {
        parent::__construct();
        //$this->db = $this->load->database('default', true);
    }

    public function filter_target($in) {
        // 获取传递的数据库名, 并连接该数据库
        $dbName = $in['db']['dbName'] ? $in['db']['dbName'] : 'default';
		//以DSN的方式传递设置
		//TODO:该处只有数据库能作为参数传递，dbdriver、username&password、和域名都是固定的。
		// $dsn = 'mysql://root@localhost/'.$dbName;
        $this->db = $this->load->database($dbName, true);
        $this->tableName = $in['db']['t'];
        switch($in['op']['op']) {
            case "update":
                return $this->dbUpdate($in['data']);
            case "select":
                $con = $this->get_select_con($in['op']['con']);
                return $this->dbSelect($con, $in['data']);
            case "delete":
                return $this->dbDelete($in['data']);
            case "insert":
                return $this->dbInsert($in['data']);
            case "where":
                return $this->dbWhere($in['data']);
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
        // 默认一次可插入多条数据
        foreach($arr as $data) {
            $tmp = $this->obj_to_array($data);
            $tmp['id'] = '';
            $this->db->insert($this->tableName, $tmp);
        }

        return $this->format_return_data();
    }

    public function dbSelect($arr, $q = "") {
        $this->db->from($this->tableName);
        // 首先需要添加查询参数
        if  ($q) {
            $this->db->like($this->obj_to_array($q), 'none');
            $result = $this->db->get();
            $pages = $result->num_rows();

            return $this->format_return_data($result->result_array(), array(
                'pages' => $pages,
                'perNum' => $arr['limit'],
                'cur' => $arr['offset'] + 1,
            ));
        }

        // var_dump($this->db->get()->result_array());
        
        // 得到记录数量
        $pages = $this->dbCountAllResult();

        if (array_key_exists('order', $arr)) {
            $order = explode(' ', $arr['order']);
            $this->db->order_by("$order[0]", "$order[1]");
        }

        if (array_key_exists('limit', $arr)) {
            $limit = $arr['limit'] ? $arr['limit'] : 50;
            // $this->db->limit($limit);
        } else { 
            $arr['limit'] = 50; 
        }

        if (array_key_exists('offset', $arr)) {
            $offset = (int)$arr['offset'] * (int)$arr['limit'];
            $offset = $offset ? $offset : 0;
            // $this->db->limit($limit, $offset);
        } else { 
            $offset = 0; 
            $arr['offset'] = 0; 
        }

        return $this->format_return_data($this->db->get($this->tableName, $arr['limit'], $offset)->result_array(), array(
            'pages' => $pages,
            'perNum' => $arr['limit'],
            'cur' => $arr['offset'] + 1,
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
            // 处理query里面的参数，变成关联数组
            $q = $this->obj_to_array($item['q']);
            //$sql = "UPDATE $this->tableName SET ". $item['q'] ." WHERE id=" . $item['id'] . "";
            $this->db->where('id', $item['id']);
            $this->db->update($this->tableName, $q);
            //$this->dbQuery($sql, false);
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
        foreach($arr as $id) {
            $this->db->where('id',$id);
            $this->db->delete($this->tableName);
        }

        return $this->format_return_data();
    }

    /**
     * 根据关联数组参数查询得到的结果
     * @param  [Array] $arr [查询条件--关联数组]
     * @return [Array]      [返回查询后的结果]
     */
    public function dbWhere($arr) {
        $this->db->from($this->tableName);
        $this->db->where($arr);
        $result = $this->db->get();
        return $result->result_array();
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
	//TODO:该处有bug，若hit.query传递的条件con为空，则会出错。。。麻烦完善一下
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
        return $this->db->count_all_results();
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

    /*
     * Update辅助函数
     * */
    private function obj_to_array($arr) {
        $re = array();
        foreach($arr as $item) {
            $re[$item['name']] = $item['value'];
        }

        return $re;
    }
}
?>
