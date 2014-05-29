/**
 * @description 弹出选择配置文件
 * @author luofei
 * @date 2014-05-28
 */
if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

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
