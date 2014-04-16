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
		$config['database'] = 'hitData';//应该加载设置信息库
		$config['dbdriver'] = 'mysql';
		$config['dbprefix'] = '';
		$config['pconnect'] = TRUE;
		$config['db_debug'] = TRUE;
		
		$this->load->model('loadData', 'ldata', $config);
		$this->load->helper('url');
	}
	
	//page(index)加载ID为index的页面
	public function page($index = 0)
	{
		if( ! file_exists('application/views/templates/bodyframe.php'))
		{
			show_404();
		}

		$data['title'] = ucfirst($index);

		$this->load->view('templates/header', $data);
		$this->load->view('templates/bodyframe', $data);
		$this->load->view('templates/footer', $data);
	}

	//current page 最近生成的页面
	//貌似无法判断最近页面是什么
	public function currentpage($context = 'hi')
	{
	}

}

?>
