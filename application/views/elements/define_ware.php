<div class="inv_ware_main //get-form-info" style="margin-top:20px; width:1000px">
</div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/form_inv_ware.js');?>"></script>
<script type="text/javascript">

// hit.INTERFACES.form.loadFromConfig(hit.CONFIG.form_inv_ware, $('.inv_ware_main'));

// hit.CONFIG.table_inv_ware.funcArr = ['edit', 'delete', 'save'];
hit.CONFIG.table_inv_ware.condition = [];
hit.load('table_inv_ware', $('.inv_ware_main'))
</script>