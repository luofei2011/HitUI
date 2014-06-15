<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>管理系统</title>
</head>
<body>

<div id="dept_define_main">
	<div id="dd-left" class="dept_define hit-2column-tree">
	</div>
	<div id="dd-right" class="dept_define hit-2column-tableform">
	</div>
</div>

</body>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_department.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/form_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">

// hit.CONFIG.table_inv_department.funcArr = ['add_poup', 'edit', 'delete', 'save'];
hit.CONFIG.table_inv_department.condition = [];
hit.load('table_inv_department', $('.dept_define#dd-right'));
/*
	var formID = hit.PARAMETER.global.registerComponent('form', 'form');
	$('div.dept_define#dd-left').prepend('<div class="form-area" id='+ formID + '></div>');
	hit.INTERFACES.form.createFromConfigNow(formID, hit.CONFIG.form_test[1]);
	*/
	var treeID = hit.PARAMETER.global.registerComponent('tree', 'tree');
	$('div.dept_define#dd-left').append('<div class="tree-area" id='+ treeID + '></div>');
	hit.INTERFACES.tree.makeFromData(treeID, hit.CONFIG.tree_test);

</script>
</html>