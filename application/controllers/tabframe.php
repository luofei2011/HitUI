<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

//tabframe.php 是数据表部分。

class tabframe extends CI_Controller {

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
	public function view($nodeId= -1)
	{
		if( ! file_exists('application/views/templates/tabframe.php'))
		{
			show_404();
		}

		if ($this->input->post() )
        {
        	$nodeId = $this->input->post('nowId',true);	//载入的时候获得所需要载入的nodeID号
        }else{
			$nodeId = -1;			//nodId默认是-1
        }
		$data['nodeId'] = $nodeId;
		
		//根据nodeId加载对应的的数据页面
		$contentData = $this->ldata->getContent($nodeId);
		$data['pages'] = $contentData; //json_encode($contentData);
		
		//载入每个页面的内容
		$pageContent = array();
		foreach ($contentData as $page){
			$tem = $this->ldata->getData($page['pageId']);
			array_push($pageContent, $tem);
		}
		$data['pageContent'] = $pageContent; //json_encode($pageContent);
 
 		//内容信息数据传给view的tabframe去显示
         $buffer = $this->load->view('templates/tabframe', $data, true);

		 //返回参数给bodyframe。php，根据改变内容控制界面状态
		 $jsonStr['html'] = $buffer;
		 $jsonStr['output'] = $nodeId;//read db success = now nodeId, fail= error
	     echo json_encode($jsonStr);

	}

}

?>
