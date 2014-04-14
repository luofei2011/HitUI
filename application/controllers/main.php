<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//main.php 为界面的入口，从之前的设置数据中读取设置。

class main extends CI_Controller {

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
	}
	
//current page 最近生成的页面

	public function currentpage($context = 'hi')
	{
		if( ! file_exists('application/views/freetestHi/'.$context.'.php'))
		{
			show_404();
		}

		$data['title'] = ucfirst($context);

		$this->load->view('freetestHi/'.$context, $data);
	}

}

?>
