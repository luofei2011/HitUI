<?php
	class LoadData extends CI_Model{

		public function __construct()
		{
			$this->load->database();
		}

		public function getData2($id='-1')
		{
		//	return array(array('id'=>'idd', 'name'=>'namme'),array('id'=>'abc', 'name'=>'123'));
			if ($id == '-1')
			{
				$query = $this->db->get('freetestTable');
				return $query->result_array();
			}

			$query = $this->db->get_where('freetestTable', array('id' => $id));
			return $query->row_array();
		}

		private $temtree = array();

		//获取treeId对应的树的信息
		public function setTreeInfo($treeId = "-2"){
			$query = $this->db->get_where("TreeFrame", array('treeId' => $treeId));
			$query = $query->row_array();
			$this->temtree['treeId'] = $treeId;
			$this->temtree['treeName'] = $query['treeName'];
		}

		//获取treeId对应的树的节点信息
		public function getTreeData($treeId='-2'){
			$this->setTreeInfo($treeId);
			$oriData = $this->db->query('select * from TreeNode where treeId='.$treeId.' order by seq;');
			$resultData = $oriData->result_array();
			return json_encode($resultData);
			//$treeData = $this->array2jsontree($resultData);
			//$this->temtree['son'] = $treeData['son'];
			//return json_encode($this->temtree);
		}
		
		//获取NodeContent节点对应页面信息
		public function getContent($nodeId = '-2'){
			$sql = 'select * from NodeContent where nodeId='.$nodeId;
			$query = $this->db->query($sql)->row_array();
			return json_encode($query);
		}
		
		//获取页面内容信息
		public function getData($dataId = "1"){
			$query = $this->db->get_where("ContentData", array('dataId' => $dataId));
			$query = $query->row_array();
			return json_encode($query);
		}

	}

?>
