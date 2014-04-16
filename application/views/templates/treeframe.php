<?php
	echo "<h1>".$state."</h1>";
	$content = json_decode($result, true);
?>
<hr/>
<?php /*foreach($content->son as $i): ?>
	<li><?=$i->name?></li>
	<?php if($i->son != null):?>
		asdfasdfasdf
	<?php endif; ?>
<?php endforeach; */?>
<?php
		//将数据库里保存的树 以json形式重新整理出来
		function array2jsontree($array, $father=null, $info=null){
			echo "<ul>";
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
				if ($item['nodeId'] != null){
					echo "<li>father:".$item['nodeId']." and the info: ".$item['nodeInfo']."</li>";
				}
				$temarray = array2jsontree($array, ($item['nodeId']), $item['nodeInfo']);
				array_push($tree['son'], $temarray);	
			}
			if ($father != null){
				$tree['nodeId'] = $father;
				$tree['name'] = $info;
				
			}
			echo "</ul>";
			return $tree;
		}
		
	$thetree = array2jsontree($content);
	var_dump("<hr/>".json_encode($thetree));
?>

