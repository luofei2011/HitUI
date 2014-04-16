<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//setup.php 设置或选择所生成的表单，将设置保存到设置信息库。

class setup extends CI_Controller {

	//先加载数据模型（数据库）
	public function __construct()
	{
		parent::__construct();

		$config['hostname'] = 'localhost';
		$config['username'] = 'root'; 
		$config['password'] = 'f';
		$config['database'] = 'hitData';//应该加载设置信息库
		$config['dbdriver'] = 'mysql';
		$config['dbprefix'] = '';
		$config['pconnect'] = TRUE;
		$config['db_debug'] = TRUE;
		
		$this->load->model('loadData', 'ldata', $config);
	}
	
//setting 设置页面

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
