<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//formframe.php 是数据表部分。

class formframe extends CI_Controller {

	//先加载数据模型（数据库）
	public function __construct()
	{
		parent::__construct();

		$config['hostname'] = 'localhost';
		$config['username'] = 'root'; 
		$config['password'] = 'f';
		$config['database'] = 'freetestDB';//应该加载设置信息库
		$config['dbdriver'] = 'mysql';
		$config['dbprefix'] = '';
		$config['pconnect'] = TRUE;
		$config['db_debug'] = TRUE;
		
		$this->load->model('freetest_model', 'ftest', $config);
		$this->load->helper('url');
	}
	
	//page(index)
	public function page($index = 0)
	{
		if( ! file_exists('application/views/templates/formframe.php'))
		{
			show_404();
		}

		$data['title'] = ucfirst($context);

		$this->load->view('templates/formframe', $data);
	}

}

?>
