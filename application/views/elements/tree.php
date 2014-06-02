<link rel="stylesheet" href="<?=base_url('static/css/content/tree.css')?>" />
<div class="tree-container">
<div class="tree-area"></div>

<!--下面两个应该是放在全局那儿的-->
<script type="text/javascript" src="<?=base_url('static/js/parameter.global.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/event.parameter.js');?>"></script>

<script type="text/javascript" src="<?=base_url('static/js/event.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.tree.js');?>"></script>
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
				con: 'limit, 50'
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
//	hit.INTERFACES.tree.makeFromData( 'menu', tree_test );

</script>
</div>
