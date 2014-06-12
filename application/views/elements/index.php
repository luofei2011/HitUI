<div class="abc">

<script type="text/javascript" src="<?=base_url('static/js/config/tree_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/form_test.js');?>"></script>
<script type="text/javascript" src="<?=base_url('static/js/config/tab_test.js');?>"></script>
<script type="text/javascript">

//Tree test
/***********************************************/

	var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');

	$('div.abc').append('<div class="tree-area" id='+ treeID + '></div>');

	 hit.INTERFACES.tree.makeFromDB(treeID, {
			table: 'menu',
			db: 'natservice',
			conf: {
				op: 'select',
				con: 'limit, 51;pager,false'
			},
			openNodes: ['03']
		});

/***********************************************/

		var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');

		$('div.abc').append('<div class="tree-area" id='+ treeID + '></div>');

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


//Form test
/***********************************************/

	var formID = hit.PARAMETER.global.registerComponent('form', 'form');

	$('div.abc').append('<div class="form-area" id='+ formID + '></div>');

	hit.INTERFACES.form.createFromConfigNow(hit.CONFIG.form_test[1], formID);

/***********************************************/

		var treeID = hit.PARAMETER.global.registerComponent('tree', 'treemenu');

		$('div.abc').append('<div class="tree-area" id='+ treeID + '></div>');

		hit.INTERFACES.tree.makeFromData(treeID, hit.CONFIG.tree_test);

//Tab test
/***********************************************/

	var tabID = hit.PARAMETER.global.registerComponent('tab', 'tab');

	$('div.abc').append('<div class="tab-area" id='+ tabID + '></div>');

	hit.INTERFACES.tab.makeFromData( tabID, hit.CONFIG.tab_test[1]);

	hit.INTERFACES.tree.setTarget(treeID, tabID, 'switch2tab');
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/

</script>