<div class="abc">

<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript">

	var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');
	$('div.abc').append('<div class="tree-area" id='+ treeID + '></div>');
	/*//设置区域ID
	$('div#now').attr('id', treeID);

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
*/
	 hit.INTERFACES.tree.makeFromDB(treeID, {
			table: 'menu',
			db: 'natservice',
			conf: {
				op: 'select',
				con: 'limit, 51;pager,false'
			},
			openNodes: ['03']
		});
	//hit.INTERFACES.tree.makeFromData( treeID, hit.CONFIG.tree_test );


		var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');

		$('div.abc').append('<div class="tree-area" id='+ treeID + '></div>');
/*		
		hit.INTERFACES.tree.makeFromDB(treeID, {
			table: 'menu',
			db: 'natservice',
			conf: {
				op: 'select',
				con: 'limit, 51;pager,false'
			},
			openNodes: ['02']
		});*/

		hit.INTERFACES.tree.makeFromData(treeID, {
			data: [
			{
				name: 'NODE1',
				code: 'root',
				father: '',
				// level: '0',
				index: '1',
				leafFlag: 'N',

			},{
				name: 'NODE2',
				code: 'aa',
				father: 'root',
				// level: '1',
				index: '1',
				leafFlag: 'Y',
				
			},{
				name: 'NODE3',
				code: 'bb',
				father: 'root',
				// level: '1',
				index: '2',
				leafFlag: 'N',
				
			},{
				name: 'NODE4',
				code: 'cc',
				father: 'bb',
				// level: '2',
				index: '1',
				leafFlag: 'Y',
				
			}
			],
		});
</script>