<div class="dept_define"></div>

<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_bill_main.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/form_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">

hit.CONFIG.table_inv_bill_main.funcArr = ['add_poup', 'edit', 'delete', 'save'];
hit.CONFIG.table_inv_bill_main.condition = [];
hit.load('table_inv_bill_main', $('.dept_define'));
/*
	var formID = hit.PARAMETER.global.registerComponent('form', 'form');
	$('div.dept_define').prepend('<div class="form-area" id='+ formID + '></div>');
	hit.INTERFACES.form.createFromConfigNow(formID, hit.CONFIG.form_test[1]);
	*/
	var treeID = hit.PARAMETER.global.registerComponent('tree', 'tree');
	$('div.dept_define').prepend('<div class="tree-area" id='+ treeID + '></div>');
	hit.INTERFACES.tree.makeFromData(treeID, hit.CONFIG.tree_test[0]);

</script>