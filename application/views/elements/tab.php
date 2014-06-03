<link rel="stylesheet" href="<?=base_url('static/css/content/tab.css')?>" />
<?php
	$layerId = isset( $_POST['layerId'] ) ? $_POST['layerId'] : 1;
//	print_r($_POST);
?>
<div class="tab-container">
<div class="tab-area"></div>
</div>

<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">
	var layerId = <?=$layerId?>;

	hit.PARAMETER.global.initPara();
	var option = hit.PARAMETER.global.getTabOption();
	if ( typeof option == 'undefined' ) {
		option = hit.CONFIG.tab_test[0];
		//hit.PARAMETER.global.setTabOption(option);
		console.log('load the tab setting as default setting');
	}

	hit.INTERFACES.tab.makeFromData( layerId , option );

</script>