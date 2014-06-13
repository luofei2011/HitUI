/**
 * @description 弹出选择配置文件
 * @author luofei
 * @date 2014-05-28
 */
if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.poup_2 = {
	"db": {
		"name": "inv",
		"t": "inv_item"
	},
	"showFields": ["Item_code", "Item_name", "Item_type", "Item_unit", "Item_spec", "Item_texture", "Item_gb", "Item_plan_price"],
	"fieldMap": [{
		"origin": "Item_code",
		"target": "Item_code"
	},
	{
		"origin": "Item_name",
		"target": "Item_name"
	},
	{
		"origin": "Item_type",
		"target": "Item_type"
	},
	{
		"origin": "Item_unit",
		"target": "Item_unit"
	},
	{
		"origin": "Item_spec",
		"target": "Item_spec"
	},
	{
		"origin": "Item_texture",
		"target": "Item_texture"
	},
	{
		"origin": "Item_gb",
		"target": "Item_gb"
	},
	{
		"origin": "Item_plan_price",
		"target": "Item_price"
	}]
};

hit.CONFIG.poup_1 = {
	"db": {
		"name": "inv",
		"t": "inv_warehouse"
	},
	"showFields": ["Ware_id", "Ware_name", "Ware_address", "Item_type", "Admin_mode", "Price_mode", "Curr_period", "Batch_flag", "Inv_emp_code", "Inv_emp_name", "Note"],
	"fieldMap": [{
		"origin": "Ware_id",
		"target": "Ware_id"
	},
	{
		"origin": "Ware_name",
		"target": "Ware_name"
	},
	{
		"origin": "Ware_address",
		"target": "Ware_address"
	},
	{
		"origin": "Item_type",
		"target": "Item_type"
	},
	{
		"origin": "Admin_mode",
		"target": "Admin_mode"
	},
	{
		"origin": "Price_mode",
		"target": "Price_mode"
	},
	{
		"origin": "Curr_period",
		"target": "Curr_period"
	},
	{
		"origin": "Batch_flag",
		"target": "Batch_flag"
	},
	{
		"origin": "Inv_emp_code",
		"target": "Inv_emp_code"
	},
	{
		"origin": "Inv_emp_name",
		"target": "Inv_emp_name"
	},
	{
		"origin": "Note",
		"target": "Note"
	}]
};
