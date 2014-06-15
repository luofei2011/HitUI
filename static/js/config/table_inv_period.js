if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.table_inv_period = {
    "db": {
        "name": "inv",
        "t": "inv_period"
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
    "widthMsg": [120, 120, 120, 120],
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
        }]
    ],
    "bodyContent": {
        "Period_id": {
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
        "Begin_date": {
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
        "End_date": {
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
        "Flag": {
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