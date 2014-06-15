<div class="gr">
</div>
<script type="text/javascript">
// 入库单审批功能
hit.CONFIG.table_inv_bill_main.condition = [{
	name: 'Bill_state',
	value: 'E'
}];
hit.CONFIG.table_inv_bill_main.funcArr = ['edit', 'delete', 'save', 'order_check'];
hit.load('table_inv_bill_main', $('.gr'));
</script>