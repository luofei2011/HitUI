/*
 *  数据表inv_bill_main配置文件
 * */
if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_inv_bill_main = {
	"url": "http://localhost/graduation-pro-2014/load/deal_data",
	"rows": 2,
	"isShowPaging": true,
	"pageNum": 10,
	"hasCheckBox": true,
	"db": {
		"name": "inv",
		"t": "inv_bill_main"
	},
	"hasQuery": true,
	"qParam": [{
		"name": "",
		"label": "",
		"type": "",
		"required": false
	}],
	"hasFunc": true,
	"funcArr": ["add", "edit", "delete", "save"],
	"widthMsg": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
	"headContent": [[{
		"label": "订单号",
		"isFixed": true,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "订单日期",
		"isFixed": false,
		"isOrdered": 'Make_date',
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	}]],
	"bodyContent": {
		"Bill_num": {
			"isKey": true,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Make_date": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "date",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Ware_id": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Ware_name": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "poup",
            "url": 'poup_1',
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Bin_id": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Bin_name": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Ware_empid": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Ware_empname": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Make_empid": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Make_empname": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Audit_empid": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Audit_empname": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Post_empid": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Post_empname": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Sup_name": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Apply_deptid": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Apply_deptname": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Bill_audit_state": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Bill_state": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"IO_type": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Checkflow_id": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		},
		"Check_notes": {
			"isKey": false,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		}
	}
}
