hit.CONFIG.table_sys_user = {
	"db": {
		"name": "inv",
		"t": "sys_user"
	},
	"url": "http:\/\/localhost\/graduation-pro-2014\/load\/deal_data",
	"rows": 2,
	"isShowPaging": true,
	"pageNum": 50,
	"hasCheckBox": true,
	"condition": [],
	"hasQuery": true,
	"qParam": [{
		"name": "user_id",
		"label": "用户名",
		"type": "text",
		"required": false
	}],
	"hasFunc": true,
	"funcArr": ["add", "delete", "save"],
	"widthMsg": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
	"headContent": [[{
		"label": "所属组",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "用户名",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "登录密码",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "用户昵称",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "登录ip",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "MAC地址",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "备注",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "验证标志",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "执行标志",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "部门编号",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "部门名称",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "当前权限",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	}]],
	"bodyContent": {
		"group_id": {
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
		"user_id": {
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
		"user_pwd": {
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
		"user_name": {
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
		"user_ip": {
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
		"user_mac": {
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
		"user_note": {
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
		"valid_flag": {
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
		"exceed_flag": {
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
		"dept_code": {
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
		"dept_name": {
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
		"current_role": {
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
};