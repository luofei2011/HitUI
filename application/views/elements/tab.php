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
	hit.conf = {
		'db': {
			name: 'graduation',
			t: 'testT'
		}
	};
		console.log("a");
	hit.query('load/deal_data', '', {
		op : 'select',
		con : 'limit,50'
	}, function(data){
	console.log(data);
	//	dealData(data);
	});
	
	dealData = function(data) {
	/*
		for (len = data.length; i < len; i++ ) {
			console.time(data[i]);
		}
		*/
	}
</script>
