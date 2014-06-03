<link rel="stylesheet" href="<?=base_url('static/css/content/tree.css')?>" />
<div class="tree-container">
<div class="tree-area"></div>
</div>

<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript">
	hit.baseURL = "<?=base_url()?>";
	hit.PARAMETER.global.initPara();

	var options = hit.PARAMETER.global.getTreeOption();
	if ( typeof options == 'undefined' ) {
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
		
		hit.PARAMETER.global.setTreeOption(options);
		console.log('load the tree setting from default');
	}

	hit.INTERFACES.tree.makeFromDB('menu', options);
//	hit.INTERFACES.tree.makeFromData( 'menu', hit.CONFIG.tree_test );

</script>