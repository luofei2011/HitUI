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

<script type="text/javascript" src="<?=base_url('static/js/jquery.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/load.js');?>"></script>
<script type="text/javascript">
	hit.baseURL = "<?=base_url()?>";	
	hit.setDB('menu', 'natservice');
		console.time("dbQuery");
	hit.query('load/deal_data', '', {
		op : 'select',
		con : 'limit,50'
	}, function(data){
		dealData(data);
	});
	console.timeEnd("dbQuery");
	
	dealData = function(data) {
		for (len = data.length, i = 0; i < len; i++ ) {
			console.log(data[i]);
		}
	}
</script>
