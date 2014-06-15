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
    "hasQuery": false,
    "qParam": [{
        "name": "",
        "label": "",
        "type": "",
        "required": false
    }],
    "hasFunc": true,
    "funcArr": ["add", "edit", "delete", "save"],
    "widthMsg": [100, 120, 160, 60, 60, 60, 120, 50, 120, 120, 160],
    "headContent": [
        [{
            "label": "仓库ID",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "仓库名",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "仓库地址",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "所含物料",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "管理者模式",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "定价状态",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "最近使用时间",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "成批标志",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "库存管理者",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "库存管理者ID",
            "isFixed": false,
            "isOrdered": false,
            "align": "center",
            "multiply": false,
            "colspan": 2
        }, {
            "label": "备注",
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
            "type": "date",
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