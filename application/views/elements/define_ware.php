<div class="inv_ware_main get-form-info" style="margin-top:20px; width:1000px"></div>
<script type="text/javascript" src="<?php echo base_url('static/js/config/form_inv_ware.js');?>"></script>
<script type="text/javascript">
//根据配置生成自由表单
hit.INTERFACES.form.loadFromConfig(hit.CONFIG.form_inv_ware, $('.inv_ware_main'));
//根据配置参数生成表格
hit.CONFIG.table_inv_ware.funcArr = ['add', 'delete', 'save'];
hit.CONFIG.table_inv_ware.condition = [];
hit.load('table_inv_ware', $('.inv_ware_main'))
</script>