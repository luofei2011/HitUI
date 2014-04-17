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
	
	//form/view传递界面代码
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

		//根据nodeId加载对应的的数据页面
		$contentData = $this->ldata->getContent($nodeId);
		//$data['pages'] = $contentData; //json_encode($contentData);
		
		$data['isEmpty'] = 1;
		//节点有内容的话	
		if (count($contentData) > 0){
			$data['isEmpty'] = 0;
		}
		
		//根据页面id载入每个页面的内容
		$pageContent = array();
		foreach ($contentData as $page){
			$tempage = $this->ldata->getDataNValues($page['pageId']);	//get contentData and it's value according to the pageId
			//提取页面每一项数据 统一放在一起
			foreach($tempage as $item){
				array_push($pageContent, $item);	
			}
		}
		$data['content'] = $pageContent; //json_encode($pageContent);

		//载入树的信息
		$treeData = $this->ldata->getTreeData();
		$data['treecontent'] = $treeData;

		//---1---内容信息数据传给view的tabframe去显示
 		$buffer = $this->load->view('templates/formframe', $data, true);
  
   		//---2---返回参数给bodyframe。php，根据改变内容控制界面状态
	    $jsonStr['html'] = $buffer;
	 	$jsonStr['output'] = $nodeId;//read db success = now nodeId, fail= error

	  	echo json_encode($jsonStr);
	}
	
	//form/upload更改数据
	public function upload()
	{
		$newdata = $this->input->post('data',true);
		//$newdata['state'] = 'success';
		$hehe = array();
		$he = array();
		foreach($newdata as $setting){
			$this->ldata->setValue($setting['id'], $setting['value']);	
			array_push($he, $setting['value']);
		}
		echo json_encode($he);
	}
}

?>
