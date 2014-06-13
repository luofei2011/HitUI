if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_storage = {
	formName: '录入入库单',
	groups: [
		{
			"db": {
				"name": "inv",
				"t": "inv_bill_main"
			},
			"showFrame": true,
			"groupName": "主表信息",
			"items": [{
				"name": "Bill_num",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Make_date",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Ware_id",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Ware_name",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Bin_id",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Bin_name",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Ware_empid",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Ware_empname",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Make_empid",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Make_empname",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Audit_empid",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Audit_empname",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Post_empid",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Post_empname",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Sup_name",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Apply_deptid",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Apply_deptname",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Bill_audit_state",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Bill_state",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "IO_type",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Checkflow_id",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Check_notes",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			}]
		},
		{
			"db": {
				"name": "inv",
				"t": "inv_bill_detail"
			},
			"showFrame": true,
			"groupName": "子表信息",
			"items": [{
				"name": "Bill_num",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Serial_num",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_code",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_name",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_type",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_unit",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_spec",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_texture",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_gb",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_batch",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_qty",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_price",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_sum",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_quality_degree",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "Item_IO_type",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			},
			{
				"name": "file_path",
				"label": "Name",
				"type": "text",
				"required": true,
				"sizeLevel": 2,
				"defaultValue": []
			}]
		}
	]
};