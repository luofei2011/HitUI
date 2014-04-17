<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//treeframe.php 是数据表部分。

class treeframe extends CI_Controller {

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
	
	//page(index)
	public function view($state= 0)
	{
		if( ! file_exists('application/views/templates/treeframe.php'))
		{
			show_404();
		}

		if ($this->input->post() )
		{
			$data['state'] = (int)($this->input->post('nowId',true))+2;
		}else{
			$data['state'] = -1;
		}
		$treeData = $this->ldata->getTreeData();
		$data['result'] = json_encode($treeData);
		//$data['result'] = $this->ldata->setTreeInfo();

		$buffer = $this->load->view('templates/treeframe', $data, true);
		$jsonStr['html'] = $buffer;
		$jsonStr['output'] = $data['state'];
		echo json_encode($jsonStr);
	}

}

?>
