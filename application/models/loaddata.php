<?php
	class LoadData extends CI_Model{

		public function __construct()
		{
			$this->load->database();
		}
		//表的树
		private $temtree = array();

		//获取treeId对应的树的信息
		//TreeFream(treeId int, treeName varchar(80))
		public function setTreeInfo($treeId = "-2"){
			$query = $this->db->get_where("TreeFrame", array('treeId' => $treeId));
			$query = $query->row_array();
			$this->temtree['treeId'] = $treeId;
			$this->temtree['treeName'] = $query['treeName'];
		}

		//获取treeId对应的树的节点信息
		//TreeNode(nodeId int auto_increment not null primary key, father int, seq int, son int, nodeInfo varchar(80))
		public function getTreeData($treeId='-2'){
			$this->setTreeInfo($treeId);
			$oriData = $this->db->query('select * from TreeNode where treeId='.$treeId.' order by seq;');
			return $oriData->result_array();
			
			//$treeData = $this->array2jsontree($resultData);
			//$this->temtree['son'] = $treeData['son'];
			//return json_encode($this->temtree);
		}
		
		//获取NodeContent节点对应页面信息
		//NodeContent(nodeId int, pageId int, page int, type char(1), TODO:pageName varchar(80))
		public function getContent($nodeId = '-2'){
			$sql = 'select * from NodeContent where nodeId='.$nodeId.' order by page';
			$query = $this->db->query($sql);
			return $query->result_array();
			
		}
		
		//获取页面内容信息
		//ContentData(dataId int auto_increment, pageId int, dataName varchar(80), dataType varchar(20), preData varchar(80), dataDescribe varchar(80))
		public function getData($pageId = '1'){
			$sql = 'select * from ContentData where pageId='.$pageId;
			$query = $this->db->query($sql);
			return $query->result_array();
		}
		
		//内容的值
		//DataRecord(Id int, recordNum int, dataId int, value varchar(80)
		public function getValue($dataId='1', $recordNum='1'){
			$sql = 'select Id, value from DataRecord where dataId='.$dataId.' and recordNum='.$recordNum;
			$query = $this->db->query($sql);
			return $query->result_array();
		}
		public function getDataNValues($pageId='1', $recordNum='1'){
			$sql = 'select Id, value, ContentData.dataId, pageId, dataName, dataType, preData, dataDescribe from DataRecord, ContentData where recordNum='.$recordNum.' and pageId='.$pageId.' and ContentData.dataId = DataRecord.dataId';
			$query = $this->db->query($sql);
			return $query->result_array();
		}
		
		//set the value
		public function setValue($Id, $value){
			$sql = 'update DataRecord set value="'.$value.'" where Id='.$Id;
			$query = $this->db->query($sql);
			return true;//$this->db->affectd_rows();
		}
		
	}

?>
