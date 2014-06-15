<div class="inv_item_main get-form-info">
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/form_inv_item.js');?>"></script>
<script type="text/javascript">

hit.INTERFACES.form.loadFromConfig(hit.CONFIG.form_inv_item, $('.inv_item_main'));

// hit.CONFIG.table_inv_item.funcArr = ['edit', 'delete', 'save'];
hit.CONFIG.table_inv_item.condition = [];
hit.load('table_inv_item', $('.inv_item_main'))

</script>