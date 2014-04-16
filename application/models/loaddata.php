<?php
	class LoadData extends CI_Model{

		public function __construct()
		{
			$this->load->database();
		}

		public function getData($id='-1')
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
			$oriData = $this->db->query('select * from TreeNode where treeId="-2" order by seq;');
			$resultData = $oriData->result_array();
			return json_encode($resultData);
			$treeData = $this->array2jsontree($resultData);
			$this->temtree['son'] = $treeData['son'];
			return json_encode($this->temtree);
		}

		//将数据库里保存的树 以json形式重新整理出来
		private function array2jsontree($array, $father=null, $info=null){
			$tree = array();
			$tem = array();
			//find son to $tem
			foreach( $array as $item){
				if($item['father'] == $father){
					array_push($tem, $item);
				}
			}
			//排序--已经在从数据库读出来的时候排序了
			//递归
			$tree['son'] = array();
			foreach($tem as $item){
				$temarray = $this->array2jsontree($array, ($item['nodeId']), $item['nodeInfo']);
				array_push($tree['son'], $temarray);	
			}
			if ($father != null){
				$tree['nodeId'] = $father;
				$tree['name'] = $info;
			}
			return $tree;
		}
	}

?>
