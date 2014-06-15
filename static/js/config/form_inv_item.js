if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_inv_item = {
    "formName": "物料定义",
    "groups": [{
        "groupName": "",
        "showFrame": true,
        "items": [{
            "name": "Item_code",
            "label": "物料编号",
            "type": "text",
            "required": true,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Item_name",
            "label": "物料名字",
            "type": "text",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": []
        }, {
            "name": "Item_type",
            "label": "种类",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Item_unit",
            "label": "计量单位",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Item_spec",
            "label": "物料标准",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Item_texture",
            "label": "材质",
            "type": "text",
            "required": false,
            "sizeLevel": 4,
            "defaultValue": []
        }, {
            "name": "Item_gb",
            "label": "抽检",
            "type": "text",
            "required": false,
            "sizeLevel": 1,
            "defaultValue": []
        }, {
            "name": "Item_plan_price",
            "label": "预订价格",
            "type": "text",
            "required": false,
            "sizeLevel": 2,
            "defaultValue": []
        }]
    }],
    "returnURL": {
        "type": "DB",
        "config": {
            "dbName": "inv",
            "dbTable": "inv_item"
        }
    },
	buttons: [{
		name: '提交',
		id: 'submit',
		type: 'submit',
		},
	],
};
