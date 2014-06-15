if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_role = {
	"db": {
		"name": "inv",
		"t": "role"
	},
	"url": "http:\/\/localhost\/graduation-pro-2014\/load\/deal_data",
	"rows": 2,
	"isShowPaging": true,
	"pageNum": 50,
	"hasCheckBox": true,
	"condition": [],
	"hasQuery": false,
	"qParam": [{
		"name": "",
		"label": "",
		"type": "",
		"required": false
	}],
	"hasFunc": true,
	"funcArr": ["add", "edit", "delete", "save"],
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
		"label": "角色名",
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
		"role_name": {
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