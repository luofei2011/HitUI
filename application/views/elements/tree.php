<div class="tree-container">
<div class="tree-area" id='now'></div>
</div>

<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript">
	//设置区域ID
	var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');
	$('.tree-area#now').attr('id', treeID);

	hit.PARAMETER.global.initPara();

	// var options = hit.PARAMETER.global.getTreeOption();
	// if ( typeof options == 'undefined' ) {
		var options = {
			table: 'menu',
			db: 'natservice',
			conf: {
				op: 'select',
				con: 'limit, 51;pager,false'
			},
			openNodes: []
		};
		options.openNodes.push('0103');
		options.openNodes.push('0104');
		options.openNodes.push('03');	
		
		// hit.PARAMETER.global.setTreeOption(options);
		console.log('load the tree setting from default');
	// }

	hit.INTERFACES.tree.makeFromDB(treeID, options);
	// hit.INTERFACES.tree.makeFromData( treeID, hit.CONFIG.tree_test );

</script>