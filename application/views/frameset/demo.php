<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="<?php echo base_url('static/css/common.css');?>">
	<link rel="stylesheet" href="<?php echo base_url('static/css/content/table.css');?>">
</head>
</body>
<div>
	<button id="poup">点击我能生成弹层额!</button>
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/load.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/event.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/lib/plugin.poup.js');?>"></script>
<script>
hit.baseURL = "<?php echo base_url();?>";
$('#poup').on('click',function() {
	hit.PLUGIN.poup.init({
		// hasCloseBtn: false
		left: 100,
		top: 10,
		db: {
			name: 'inv',
			t: 'inv_bill_main'
		},
		label: '订单详情'
	});
})
hit.PLUGIN.poup.init({
	// hasCloseBtn: false
	left: 800,
	top: 10,
	db: {
		name: 'inv',
		t: 'inv_item'
	},
	width: 392,
	label: '订单类别'
});
</script>
</body>
</html>