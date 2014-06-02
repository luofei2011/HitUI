<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Load extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('Base');
    }

    public function get_data() {
        echo json_encode($this->format_return_data($this->Base->test()));
    }

    public function deal_data() {
        echo json_encode($this->format_return_data($this->Base->filter_target($this->input->post('data', true))));
    }

    public function insert_users() {
        $num = $this->input->post('num', true);
        $this->Base->insert_users($num);
        echo json_encode($this->format_return_data());
    }

    public function auto_config() {
        $config_name = $this->input->post('config_name', true);
        $db = $this->input->post('db', true);
        $t = $this->input->post('t', true);
        $json = array();
        $json['db'] = array(
            'name' => $db,
            't' => $t
        );
        $result = $this->Base->auto_config($db, $t);
        switch($config_name) {
            case 'table':
                $json['url'] = base_url('load/deal_data');
                $json['rows'] = 2;
                $json['isShowPaging'] = true;
                $json['pageNum'] = 50;
                $json['hasCheckBox'] = true;
                $json['hasQuery'] = true;
                $json['qParam'] = array(
                    array(
                        'name' => '',
                        'label' => '',
                        'type' => '',
                        'required' => false
                    )
                );
                $json['hasFunc'] = true;
                $json['funcArr'] = array('add', 'edit', 'delete', 'save');
                $json['widthMsg'] = array();
                $json['headContent'] = array(
                    array(
                    )
                );

                for ($i = 0, $len = count($result); $i < $len; $i++) {
                    array_push($json['widthMsg'], 120);
                    array_push($json['headContent'][0], array(
                            'label' => '', // 名字
                            'isFixed' => false, // 是否可作为固定列
                            'isOrdered' => false, // 是否可排序
                            'align' => 'center', // 对其方式：center，left，right
                            'multiply' => false, // 是否会占用多行
                            'colspan' => 2
                    ));
                }

                $json['bodyContent'] = array();

                foreach($result as $f) {
                    //$json['bodyContent'][$f->Field] = array();
                    $json['bodyContent'][$f['Field']] = array(
                        'isKey' => $f['Key'] == 'PRI' ? true : false, 
                        'isShow' => true, 
                        'align' => 'left',
                        'canEdit' => true, 
                        'type' => $f['Type'] == 'date' ? 'date' : 'text',  
                        'valid' => $f['Null'] == 'NO' ? 'required' : '',
                        'sureValue' => '',
                        'minLen' => '',
                        'maxLen' => ''
                    );
                }
                break;
            case 'poup':
                $json['showFields'] = array();
                $json['fieldMap'] = array();
                foreach($result as $f) {
                    array_push($json['showFields'], $f['Field']);
                    array_push($json['fieldMap'], array(
                        'origin' => $f['Field'],
                        'target' => $f['Field'],
                    ));
                }
                break;
        }
        echo json_encode($json);
    }

    /*
     * 通用的路由函数
     * */
    public function frameset($page) {
        $this->load->view('frameset/' . $page);
    }

    /*
     * freemen的通用路由函数
     * */
    public function elements($page) {
        $this->load->view('elements/' . $page);
    }

    // 通用数据返回格式
    private function format_return_data($data = "") {
        $r = array();
        $r['status'] = "ok";
        $r['data'] = $data;
        
        return $r;
    }
}
