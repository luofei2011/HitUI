<div class="tab-area" id='now'></div>
<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">
	option = hit.CONFIG.tab_test[0];
	hit.INTERFACES.tab.makeFromDataInNode( $('.tab-area#now') , option );
	hit.GLOBAL.function.initLink();
</script>