<link rel="stylesheet" href="<?=base_url('static/css/content/tree.css')?>" />
<div class="tree-container">
<h1>树</h1>
<script type="text/javascript" src="<?=base_url('static/js/jquery.js');?>"></script>
<div class="tree-area"></div>

<!--script type="text/javascript" src="<?=base_url('static/js/load.js');?>"></script-->
<script type="text/javascript" src="<?=base_url('static/js/lib/component.form.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/component.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/event.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/lib/interfaces.tree.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript">
	hit.baseURL = "<?=base_url()?>";	
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

//	hit.INTERFACES.tree.makeFromDB('menu', options);
	hit.INTERFACES.tree.makeFromTest( 'menu', tree_test );

</script>
</div>
