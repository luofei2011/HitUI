if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_sys_auth = {
    "db": {
        "name": "inv",
        "t": "user_auth_v"
    },
    "url": "http:\/\/localhost\/webfreemen\/graduation-pro-2014\/load\/deal_data",
    "rows": 2,
    "isShowPaging": true,
    "pageNum": 50,
    "hasCheckBox": true,
    "condition": [],
    "hasQuery": true,
    "qParam": [{
        "name": "menu_code",
        "label": "菜单系统ID",
        "type": "text",
        "required": false
    }],
    "hasFunc": true,
    "funcArr": ["add", "edit", "delete", "save"],
    "widthMsg": [100, 160, 120, 200],
    "headContent": [
        [{
            "label": "用户ID",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "用户名",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "菜单系统ID",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "菜单权限名",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }]
    ],
    "bodyContent": {
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
        "menu_code": {
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
        "menu_name": {
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