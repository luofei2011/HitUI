<div class="order-deal">
</div>
<script type="text/javascript">
// 入库单过账功能
hit.CONFIG.table_inv_bill_main.condition = [{
	name: 'Bill_state',
	value: 'R'
}];
hit.CONFIG.table_inv_bill_main.funcArr = ['edit', 'delete', 'save', 'order_deal'];
hit.load('table_inv_bill_main', $('.order-deal'));
</script>