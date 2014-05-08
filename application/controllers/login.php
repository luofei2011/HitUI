<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('Base');
		$this->load->helper('url');

		$uname = $this->input->cookie('uname', true);
		$urole = $this->input->cookie('urole', true);
		$uid = $this->input->cookie('uid', true);

		if ($uname && $uid && $urole) {
			redirect('/', 'refresh');
		}
	}

	public function index() {
		$this->load->view('login');
	}

	public function login_sys() {
		$uname = $this->input->post('uname', true);
		$pwd = $this->input->post('pwd', true);

		if (!$uname) {
			echo "false";
			return;
		}

		$re = $this->Base->filter_target(array(
			'db' => array('dbName' => 'inv', 't' => 'sys_user'),
			'data' => array('user_id' => $uname, 'user_pwd' => $pwd),
			'op' => array('op' => 'where', 'con' => ''),
		));

		if (count($re)) {
			echo "true";

			// 设置登录SESSION0
			setcookie('uid', $re[0]['user_id'], 0, '/');
			setcookie('uname', $re[0]['user_name'], 0, '/');
			setcookie('urole', $re[0]['current_role'], 0, '/');
		} else {
			echo "false";
		}
	}
}