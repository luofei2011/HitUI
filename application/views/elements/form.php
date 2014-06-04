<?php
	$tableCon = isset( $_POST['tableCon'] ) ? $_POST['tableCon'] : ""; 
	$conJson = json_encode($tableCon);
	
?>
<div class="form-container">
<div class="form-area" id="now"></div>
</div>

<script type="text/javascript" src="<?=base_url('static/js/config/form_test.js');?>"></script>
<script type="text/javascript">
	//设置区域ID
	var formareaID = hit.PARAMETER.global.registerComponent('formarea');
	$('div#now').attr('id', formareaID);

	//若有post设置，则按post的创建，若没有，则使用默认的设置
	tableCon = JSON.parse('<?=$conJson?>');
	if (tableCon != "") {
		hit.INTERFACES.form.createFromTable( tableCon, formareaID );
		console.log('here with table Configuration');
	} else {
		hit.INTERFACES.form.createFromConfig(hit.CONFIG.form_test, formareaID);
		console.log('here without table con');
	}

</script>