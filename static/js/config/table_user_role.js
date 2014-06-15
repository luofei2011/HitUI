hit.CONFIG.table_user_role = {
	"db": {
		"name": "inv",
		"t": "user_role"
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
	"funcArr": ["add", "edit", "delete", "save"],
	"widthMsg": [120, 120],
	"headContent": [[{
		"label": "用户名",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "权限类别",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	}]],
	"bodyContent": {
		"user_id": {
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
		"role_code": {
			"isKey": true,
			"isShow": true,
			"align": "left",
			"canEdit": true,
			"type": "text",
			"valid": "required",
			"sureValue": "",
			"minLen": "",
			"maxLen": ""
		}
	}
};