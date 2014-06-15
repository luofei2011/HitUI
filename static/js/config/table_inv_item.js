if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_inv_item = {
    "db": {
        "name": "inv",
        "t": "inv_item"
    },
    "url": "http:\/\/localhost\/webfreemen\/graduation-pro-2014\/load\/deal_data",
    "rows": 2,
    "isShowPaging": true,
    "pageNum": 50,
    "hasCheckBox": true,
    "condition": [],
    "hasQuery": true,
    "qParam": [{
        "name": "",
        "label": "",
        "type": "",
        "required": false
    }],
    "hasFunc": true,
    "funcArr": ["add", "edit", "delete", "save"],
    "widthMsg": [120, 120, 120, 120, 120, 120, 120, 120],
    "headContent": [
        [{
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }]
    ],
    "bodyContent": {
        "Item_code": {
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
        "Item_name": {
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
        "Item_type": {
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
        "Item_unit": {
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
        "Item_spec": {
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
        "Item_texture": {
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
        "Item_gb": {
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
        "Item_plan_price": {
            "isKey": false,
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