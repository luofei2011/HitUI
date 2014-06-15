if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_inv_ware = {
    "db": {
        "name": "inv",
        "t": "inv_warehouse"
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
    "widthMsg": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
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
        "Ware_id": {
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
        "Ware_name": {
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
        "Ware_address": {
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
        "Admin_mode": {
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
        "Price_mode": {
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
        "Curr_period": {
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
        "Batch_flag": {
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
        "Inv_emp_code": {
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
        "Inv_emp_name": {
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
        "Note": {
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