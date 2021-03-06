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
		// 每连接一个数据库，先在database.php用数据库的名字注册一个组
        $dbName = $in['db']['dbName'] ? $in['db']['dbName'] : 'default';
		//以DSN的方式传递设置
		//该处只有数据库能作为参数传递，dbdriver、username&password、和域名都是固定的。
		// $dsn = 'mysql://root@localhost/'.$dbName;
        $this->db = $this->load->database($dbName, true);
        $this->tableName = $in['db']['t'];
        switch($in['op']['op']) {
            case "update":
                return $this->dbUpdate($in['data']);
            case "select":
                $con = $this->get_select_con($in['op']['con']);
                $data = array_key_exists('data', $in) ? $in['data'] : '';
                return $this->dbSelect($con, $data);
            case "delete":
                return $this->dbDelete($in['data']);
            case "insert":
                return $this->dbInsert($in['data'], $in['op']['con']);
            case "where":
                return $this->dbWhere($in['data']);
            case "like":
                return $this->dbLike($this->get_select_con($in['op']['con']), $in['data']);
            default:
                break;
        }
    }

    /**
     * 自动配置文件生成
     */
    public function auto_config($db = "", $t = "") {
        $sql = "describe " . $t;
        $this->db = $this->load->database($db, true);
        $result = $this->db->query($sql)->result_array();
        return $result;
    }

    /*
     * 根据参数插入数据库
     * $arr = array(
     *  'table' => '',
     *  'data' => array(),
     * );
     * */
    public function dbInsert($arr, $con = false) {
        $key = '';
        // 默认一次可插入多条数据
        foreach($arr as $data) {
            $tmp = $this->obj_to_array($data);

            if ($con) {
                $k = $this->auto_create_key($tmp, $con);

                if ($k) {
                    $tmp[$k['name']] = $k['value'];
                    $key = array(
                        'name' => $k['name'],
                        'value' => $k['value']
                        );
                }
            }
            $this->db->insert($this->tableName, $tmp);
        }

        return $this->format_return_data($key);
    }

    private function auto_create_key($data, $con) {
        $uid = $this->input->cookie('uid', true);
        $len = 20;
        $key = "IW00" . strtoupper($uid) . "0";
        switch($con) {
            case "Bill_num":
                $date = str_replace('-', '', $data['Make_date']) | date('Ymd');
                $key .= $date;
                $this->db->where('Make_date', $data['Make_date']);
                $this->db->from('inv_bill_main');
                $num = $this->db->count_all_results() + 1;

                for ($i = 0, $l = $len - strlen($key) - 1; $i < $l; $i++)
                    $key .= '0';

                $key .= $num;
                $field = "Bill_num";
                break;
            case "user_ip":
                if ($HTTP_SERVER_VARS["HTTP_X_FORWARDED_FOR"]) { 
                    $ip = $HTTP_SERVER_VARS["HTTP_X_FORWARDED_FOR"]; 
                } elseif ($HTTP_SERVER_VARS["HTTP_CLIENT_IP"]) { 
                    $ip = $HTTP_SERVER_VARS["HTTP_CLIENT_IP"]; 
                } elseif ($HTTP_SERVER_VARS["REMOTE_ADDR"]) { 
                    $ip = $HTTP_SERVER_VARS["REMOTE_ADDR"]; 
                } elseif (getenv("HTTP_X_FORWARDED_FOR")) { 
                    $ip = getenv("HTTP_X_FORWARDED_FOR"); 
                } elseif (getenv("HTTP_CLIENT_IP")) { 
                    $ip = getenv("HTTP_CLIENT_IP"); 
                } elseif (getenv("REMOTE_ADDR")) { 
                    $ip = getenv("REMOTE_ADDR"); 
                } else { 
                    $ip = "Unknown"; 
                } 
                $field = "user_ip";
                $key = $ip;
                break;
            default:
                $key = false;
                break;
        }

        if (!$key) 
            return false;

        return array(
            'name' => $field,
            'value' => $key,
        );
    }

    /*
     * 对数据表进行like查询
     */
    public function dbLike($arr, $q) {
        $this->db->from($this->tableName);
        $this->db->like($this->obj_to_array($q), 'none');
        $result = $this->db->get();
        $pages = $result->num_rows();
        $limit = 50;
        $offset = 0;

        if (array_key_exists('limit', $arr)) {
            $limit = $arr['limit'];
        } 
        if (array_key_exists('offset', $arr)) {
            $offset = $arr['offset'];
        }

        $re = array(
            'pages' => $pages,
            'perNum' => $limit,
            'cur' => $offset + 1,
            );

        if (array_key_exists('target', $arr)) {
            $re['target'] = $arr['target'];
        } else {
            $re['target'] = '';
        }

        return $this->format_return_data($result->result_array(), $re);
    }

    /*
     * 根据限制条件查询所有结果
     */
    public function dbSelect($arr, $con = "") {
        $this->db->from($this->tableName);

        if ($con && is_array($con) && count($con)) {
            $condition = $this->obj_to_array($con);
            $this->db->where($condition);
        }
        // 得到记录数量
        // $pages = $this->dbCountAllResult();
        $pages = $this->db->count_all_results();

        if ($con && is_array($con) && count($con)) {
            $condition = $this->obj_to_array($con);
            $this->db->where($condition);
        }

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

        if (array_key_exists('pager', $arr) && $arr['pager'] == 'false') {
            $re = array();
        } else {
            $re = array(
                'pages' => $pages,
                'perNum' => $arr['limit'],
                'cur' => $arr['offset'] + 1,
            );

            if (array_key_exists('target', $arr)) {
                $re['target'] = $arr['target'];
            }
        }

        // return $this->format_return_data($this->get_table_keys("", $this->tableName));

        return $this->format_return_data($this->db->get($this->tableName, $arr['limit'], $offset)->result_array(), $re);
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
            $keys = $this->obj_to_array($item['keys']);

            // 根据多个属性的主键字段更新数据操作
            $this->db->where($keys);
            $this->db->update($this->tableName, $q);
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
        # 之前默认的主键是id，这里做修改
        $keys = $this->get_table_keys();
        $key = "id";

        if (count($keys))
            $key = $keys[0];

        foreach($arr as $k) {
            $keys = $this->obj_to_array($k);
            //$this->db->where($key, $id);
            $this->db->where($keys);
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

    /**
     * 获取数据库中某张表的主键信息
     * @param  string $db [数据库名]
     * @param  string $t  [数据表名]
     * @return Array     [主键信息]
     */
    private function get_table_keys($t = "") {
        $t = $t | $this->tableName;
        $sql = "describe " . $t;
        $result = $this->db->query($sql)->result_array();
        $keys = array();

        foreach ($result as $r) {
            if ($r['Key'] == "PRI")
                array_push($keys, $r['Field']);
        }

        return $keys;
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
