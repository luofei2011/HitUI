<div id="dept_define_main" class='get-form-info'>
	<div id="dd-left" class="dept_define hit-2column-tree"><div class="tree-area"></div></div>
	<div id="dd-right" class="dept_define hit-2column-tableform"></div>
</div>

<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_department.js');?>"></script>
<script type="text/javascript">
//加载树状导航组件
	var options = {
		table: 'inv_department',
		db: 'inv',
		conf: {
			op: 'select',
			con: 'limit, 50;pager,false'
		},
		openNodes: ['root']
	};
hit.INTERFACES.tree.makeFromDBInNode( $('div.dept_define#dd-left .tree-area') , options );
//加载表格组件
hit.CONFIG.table_inv_department.condition = [];
hit.load('table_inv_department', $('.dept_define#dd-right'));

</script>
