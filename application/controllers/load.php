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

    public function insert_users() {
        $num = $this->input->post('num', true);
        $this->Base->insert_users($num);
        echo json_encode($this->format_return_data());
    }

    /*
     * 通用的路由函数
     * */
    public function frameset($page) {
        $this->load->view('frameset/' . $page);
    }

    // 通用数据返回格式
    private function format_return_data($data = "") {
        $r = [];
        $r['status'] = "ok";
        $r['data'] = $data;
        
        return $r;
    }
}
