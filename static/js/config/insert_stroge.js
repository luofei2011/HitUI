if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_storage = [
{
	"formName": "入库单信息",
	"groups": [{
		"groupName": "",
		"showFrame": false,
		"items": [
		{
			"name": "Bill_num",
			"label": "订单号",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": [],
			key: true
		},
		{
			"name": "Make_date",
			"label": "订单日期",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Ware_id",
			"label": "Ware_id",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Ware_name",
			"label": "Ware_name",
			"type": "poup",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": [],
			selections: ['poup_1']
		},
		{
			"name": "Bin_id",
			"label": "Bin_id",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Bin_name",
			"label": "Bin_name",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Ware_empid",
			"label": "Ware_empid",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Ware_empname",
			"label": "Ware_empname",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Make_empid",
			"label": "Make_empid",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Make_empname",
			"label": "Make_empname",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Audit_empid",
			"label": "Audit_empid",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Audit_empname",
			"label": "Audit_empname",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Post_empid",
			"label": "Post_empid",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Post_empname",
			"label": "Post_empname",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Sup_name",
			"label": "Sup_name",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Apply_deptid",
			"label": "Apply_deptid",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Apply_deptname",
			"label": "Apply_deptname",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Bill_audit_state",
			"label": "Bill_audit_state",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Bill_state",
			"label": "Bill_state",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": 'E'
		},
		{
			"name": "IO_type",
			"label": "IO_type",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Checkflow_id",
			"label": "Checkflow_id",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Check_notes",
			"label": "Check_notes",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		}]
	}],
	"returnURL": {
		"type": "DB",
		"config": {
			"dbName": "inv",
			"dbTable": "inv_bill_main"
		}
	}
},
{
	"formName": "物料信息",
	"groups": [{
		"groupName": "",
		"showFrame": false,
		"items": [
		// {
		// 	"name": "Bill_num",
		// 	"label": "订单号",
		// 	"type": "text",
		// 	"required": true,
		// 	"sizeLevel": 2,
		// 	"defaultValue": [],
		// 	key: true
		// },
		{
			"name": "Serial_num",
			"label": "类型号",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_code",
			"label": "类别代码",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_name",
			"label": "类别名称",
			"type": "poup",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": [],
			selections: ['poup_2']
		},
		{
			"name": "Item_type",
			"label": "类别类型",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_unit",
			"label": "类别单元",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_spec",
			"label": "类别种类",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_texture",
			"label": "类别属性",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_gb",
			"label": "Item_gb",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_batch",
			"label": "Item_batch",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_qty",
			"label": "Item_qty",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_price",
			"label": "Item_price",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_sum",
			"label": "Item_sum",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_quality_degree",
			"label": "Item_quality_degree",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "Item_IO_type",
			"label": "Item_IO_type",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		},
		{
			"name": "file_path",
			"label": "file_path",
			"type": "text",
			"required": true,
			"sizeLevel": 2,
			"defaultValue": []
		}]
	}],
	"returnURL": {
		"type": "DB",
		"config": {
			"dbName": "inv",
			"dbTable": "inv_bill_detail"
		}
	}
}
];