<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//main.php 为界面的入口，从之前的设置数据中读取设置。

class main extends CI_Controller {

	//先加载数据模型（数据库）
	public function __construct()
	{
		parent::__construct();

		$config['hostname'] = 'localhost';
		$config['username'] = 'root'; 
		$config['password'] = '';
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

	//Tongyongde routing function
	public function load($page="index"){
		$openpage = 'application/views/elements/' . $page . '.php';
		if( ! file_exists( $openpage ))
		{
			show_404();
		}
		
		if( $this->input->post() ){
			$data["isPost"] = true;
			$data["in"] = $this->getInputData($this->input->post( 'data' , true ));
		}else{
			$data["isPost"] = false;
		}

		$this->load->view( 'elements/' . $page, $data );
	}
	
	//用于统一处理post进来的数据，数据都应该符合以下格式
	private function getInputData( $in ){
		return $in;
	}

}

?>
