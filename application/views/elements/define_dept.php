<div id="dept_define_main" class='get-form-info'>
	<div id="dd-left" class="dept_define hit-2column-tree"></div>
	<div id="dd-right" class="dept_define hit-2column-tableform"></div>
</div>

<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_department.js');?>"></script>
<script type="text/javascript">

// hit.CONFIG.table_inv_department.funcArr = ['add_poup', 'edit', 'delete', 'save'];
hit.CONFIG.table_inv_department.condition = [];
hit.load('table_inv_department', $('.dept_define#dd-right'));

var treeID = hit.PARAMETER.global.registerComponent('tree', 'tree');
$('div.dept_define#dd-left').append('<div class="tree-area" id='+ treeID + '></div>');
	var options = {
		table: 'inv_department',
		db: 'inv',
		conf: {
			op: 'select',
			con: 'limit, 50;pager,false'
		},
		openNodes: ['root']
	};
hit.INTERFACES.tree.makeFromDB(treeID, options);

</script>
