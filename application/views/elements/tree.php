<div class="tree-area" id='now'></div>
<script type="text/javascript">
	var options = {
		table: 'menu',
		db: 'natservice',
		conf: {
			op: 'select',
			con: 'limit, 951;pager,false'
		},
		openNodes: ['root']
	};
	hit.INTERFACES.tree.makeFromDBInNode( $('.tree-area#now'), options);
</script>