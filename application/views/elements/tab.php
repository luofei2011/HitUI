<hr/>
<h1>hello</h1>
<?php
	if ( $isPost ){
		echo "sth inside";
		echo $in;
	}else{
		echo "nothing post";
	}
?>
<div class="tree-area">
</div>

<script type="text/javascript" src="<?=base_url('static/js/jquery.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/load.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.form.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/event.tree.js');?>"></script>
<script type="text/javascript">
	treeType = 'menu';
	hit.baseURL = "<?=base_url()?>";	
	hit.setDB('menu', 'natservice');
		console.time("dbQuery");
	hit.query('load/deal_data', '', {
		op : 'select',
		con : 'limit,50'
	}, function(data){
		hit.COMPONENT.tree.initTree(treeType);
		dealData(data);
	});
	console.timeEnd("dbQuery");
	
	dealData = function(data) {
		for (len = data.length, i = 0; i < len; i++ ) {
			var tem = data[i];
			console.log(tem);
			hit.COMPONENT.tree.addTreeNode(treeType, tem.menu_name, tem.menu_code, tem.menu_father, tem.menu_level, tem.menu_index, tem.leaf_flag, tem.task_flag);
		}
		
	var openList = new Array();
	openList.push('0103');
	openList.push('0104');
	openList.push('03');
	hit.COMPONENT.tree.setOpenNode(treeType, openList)
	}
</script>
