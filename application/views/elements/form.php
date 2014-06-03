<!--link rel="stylesheet" href="<?=base_url('static/css/content/form.css')?>" /-->
<?php
	$tableCon = isset( $_POST['tableCon'] ) ? $_POST['tableCon'] : ""; 
	$conJson = json_encode($tableCon);
?>
<div class="form-container">
<script type="text/javascript" src="<?=base_url('static/js/jquery.js');?>"></script>
<div class="form-area"></div>

<!--
<script type="text/javascript" src="<?=base_url('static/js/load.js');?>"></script>
-->
<!--下面两个应该是放在全局那儿的-->
<script type="text/javascript" src="<?=base_url('static/js/parameter.global.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/event.parameter.js');?>"></script>
<!--
<script type="text/javascript" src="<?=base_url('static/js/event.form.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.theform.js');?>"></script>
-->
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.form.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/form_test.js');?>"></script>
<script type="text/javascript">
	tableCon = JSON.parse('<?=$conJson?>');
	if (tableCon != "") {
		hit.INTERFACES.form.createFromTable( tableCon );
		console.log('here');
	} else {
		hit.INTERFACES.form.create();
		console.log('here2');
	}

</script>
</div>
