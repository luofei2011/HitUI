if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_inv_ware = {
    "formName": "仓库定义修改",
    "groups": [{
        "groupName": "",
        "showFrame": true,
        "items": [{
            "name": "Ware_id",
            "label": "仓库ID",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Ware_name",
            "label": "仓库名",
            "type": "text",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Ware_address",
            "label": "仓库地址",
            "type": "text",
            "required": false,
            "sizeLevel": 1,
            "defaultValue": []
        }, {
            "name": "Admin_mode",
            "label": "管理者模式",
            "type": "radio",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": 1,
            "selections": [
                'A','B','W','C','Q','T'
            ]
        }, {
            "name": "Price_mode",
            "label": "定价状态",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Curr_period",
            "label": "最近使用时间",
            "type": "date",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Item_type",
            "label": "所含物料",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Batch_flag",
            "label": "成批标志",
            "type": "radio",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": 1,
            "selections": [
                'Y','N'
            ]
        }, {
            "name": "Inv_emp_code",
            "label": "库存管理者ID",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Inv_emp_name",
            "label": "库存管理者",
            "type": "text",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Note",
            "label": "备注",
            "type": "text",
            "required": false,
            "sizeLevel": 1,
            "defaultValue": []
        }]
    }],
    "returnURL": {
        "type": "DB",
        "config": {
            "dbName": "inv",
            "dbTable": "inv_warehouse"
        }
    },
	buttons: [{
		name: '提交',
		id: 'submit',
		type: 'submit',
		},
	],
};
