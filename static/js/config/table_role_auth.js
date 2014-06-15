hit.CONFIG.table_role_auth = {
	"db": {
		"name": "inv",
		"t": "role_auth"
	},
	"url": "http:\/\/localhost\/graduation-pro-2014\/load\/deal_data",
	"rows": 2,
	"isShowPaging": true,
	"pageNum": 50,
	"hasCheckBox": true,
	"condition": [],
	"hasQuery": true,
	"qParam": [{
		"name": "role_code",
		"label": "角色编号",
		"type": "text",
		"required": false
	}],
	"hasFunc": true,
	"funcArr": ["add", "delete", "save", "multi_add"],
	"widthMsg": [120, 120],
	"headContent": [[{
		"label": "角色编号",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	},
	{
		"label": "菜单编号",
		"isFixed": false,
		"isOrdered": false,
		"align": "center",
		"multiply": false,
		"colspan": 2
	}]],
	"bodyContent": {
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
		},
		"menu_code": {
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
}