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
		$config['database'] = 'hitData';//应该加载设置信息库
		$config['dbdriver'] = 'mysql';
		$config['dbprefix'] = '';
		$config['pconnect'] = TRUE;
		$config['db_debug'] = TRUE;
		
		$this->load->model('loadData', 'ldata', $config);
		$this->load->helper('url');
	}
	
	//page(index)
	public function view()
	{
		if( ! file_exists('application/views/templates/formframe.php'))
		{
			show_404();
		}

		if ($this->input->post() )
		{
 			$nodeId = $this->input->post('nowId',true); //载入的时候获得所需要载入的nodeID号
		}else{
	    	$nodeId = -1;           //nodId默认是-1
		}
		
		$data['nodeId'] = $nodeId;
		//根据nodeId加载对应的的数据页与内容
		$contentData = $this->ldata->getContent($nodeId);
		$data['result'] = json_encode($contentData);
		

//内容信息数据传给view的tabframe去显示
 		$buffer = $this->load->view('templates/formframe', $data, true);
  
   		//返回参数给bodyframe。php，根据改变内容控制界面状态
	    $jsonStr['html'] = $buffer;
	 	$jsonStr['output'] = $nodeId;//read db success = now nodeId, fail= error
	  	echo json_encode($jsonStr);


	}

}

?>
