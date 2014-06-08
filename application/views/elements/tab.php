<div class="tab-container">
<div class="tab-area" id='now'></div>
</div>

<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">
	tabID = hit.PARAMETER.global.registerComponent('tab','tab');
	$('.tab-area#now').attr('id', tabID);

	// hit.PARAMETER.global.initPara();
	// var option = hit.PARAMETER.global.getTabOption();
	// if ( typeof option == 'undefined' ) {
		option = hit.CONFIG.tab_test[0];
		//hit.PARAMETER.global.setTabOption(option);
	// 	console.log('load the tab setting as default setting');
	// }

	hit.INTERFACES.tab.makeFromData( tabID , option );

</script>