<link rel="stylesheet" href="<?=base_url('static/css/content/tab.css')?>" />
<?php
	$layerId = isset( $_POST['layerId'] ) ? $_POST['layerId'] : 1;
?>
<div class="tree-container">
<h1>标签</h1>
<script type="text/javascript" src="<?=base_url('static/js/jquery.js');?>"></script>
<div class="tab-area"></div>

<!--script type="text/javascript" src="<?=base_url('static/js/load.js');?>"></script-->
<script type="text/javascript" src="<?=base_url('static/js/event.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tab.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.tab.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">
	var layerId = <?=$layerId?>;
	//alert(layerId);

	hit.INTERFACES.tab.makeFromData( layerId , tab_test );

</script>
</div>
