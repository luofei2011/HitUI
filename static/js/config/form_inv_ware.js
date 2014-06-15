if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_inv_ware = {
    "formName": "",
    "groups": [{
        "groupName": "",
        "showFrame": true,
        "items": [{
            "name": "Ware_id",
            "label": "Ware_id",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Ware_name",
            "label": "Ware_name",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Ware_address",
            "label": "Ware_address",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Item_type",
            "label": "Item_type",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Admin_mode",
            "label": "Admin_mode",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Price_mode",
            "label": "Price_mode",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Curr_period",
            "label": "Curr_period",
            "type": "date",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Batch_flag",
            "label": "Batch_flag",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Inv_emp_code",
            "label": "Inv_emp_code",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Inv_emp_name",
            "label": "Inv_emp_name",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Note",
            "label": "Note",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
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
