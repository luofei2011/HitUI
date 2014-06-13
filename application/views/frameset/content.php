<div class="gr">
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_inv_bill_main.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_test.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/table_poup.js');?>"></script>
<script type="text/javascript" src="<?php echo base_url('static/js/config/insert_stroge.js');?>"></script>
<script type="text/javascript">
hit.conf.db = hit.CONFIG.table_inv_bill_main.db;
hit.load('table_inv_bill_main', $('.gr'));

// 入库单过账功能
hit.CONFIG.table_inv_bill_main.condition = [{
	name: 'Bill_state',
	value: 'R'
}];
hit.load('table_inv_bill_main', $('.gr'));

hit.load('table_test', $('.gr'));
</script>