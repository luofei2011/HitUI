<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Load extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->helper('url');
    }

    /*
     * 通用的路由函数
     * */
    public function frameset($page) {
        $this->load->view('frameset/' . $page);
    }
}
