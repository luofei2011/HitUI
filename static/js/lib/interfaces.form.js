/*
 * lib/interfaces.form.js, 负责控制form的数据交互的接口
 * @author: freemen
 * @date: 2014-05-29
 * */
;(function() {
//不乱加全局变量，嗯。
var iForm= {

	//create default form
	create: function( formareaID ) {
		html = "";
		html += '<h1> Hi! It\'s me again! </h1>';
		$('.form-area#'+formareaID).empty().append(html);
	},

	/*
	 * create form by table configuration
	 * */
	createFromTable: function( con, formareaID ) {
		html = "";
		html += '<h1> Hi! me again! the table config is in the log</h1>';
		console.log(formareaID);
		console.log($('.form-area#'+formareaID).attr('id'));
		console.log(con);
		$('.form-area#'+formareaID).empty().append(html);
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数放在config内
	 * */
	createFromConfigNow: function( formareaID, config ) {
		html = hit.COMPONENT.form.createFromConfig( config, formareaID );
		$('.form-area#'+formareaID).empty().append(html);
	},

	appendForm2: function( node, config, formareaID ) {
		node.append(hit.COMPONENT.form.createFromConfig( config, formareaID ));
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数放在config内
	 * */
	createFromConfig: function( formareaID, config ) {
		return hit.COMPONENT.form.createFromConfig( config, formareaID );
	},

	loadFromConfig: function( config, node ) {
		var formareaID = hit.PARAMETER.global.registerComponent('form', 'formarea');
		html = hit.COMPONENT.form.createFromConfig( config, formareaID );
		node.append('<div class=form-area id=' + formareaID + '>' + html + '</div>');
	},

	loadFromDB: function( dbConf, node ) {
		var treedata = {}, info = {}, temdata = [];
		hit.setDB( dbConf.table, dbConf.db );
			console.time("js/lib/hit.INTERFACES.form.loadFromDB query");
		hit.query('load/deal_data', '', dbConf.conf
		,function( data ) {

		});
			console.timeEnd("js/lib/hit.INTERFACES.form.loadFromDB query");

	},

	loadFromDefaultDB: function(table, node) {
		var treedata = {}, info = {}, temdata = [];
		hit.setDB( table, 'inv' );
			console.time("js/lib/hit.INTERFACES.form.loadFromDefaultDB query");
		hit.query('load/deal_data', ''
		,{
			op: 'select',
			con: 'limit, 50;pager,false'
		}
		,function( data ) {
			conf = hit.INTERFACES.form.dbData2Config(data);
			// hit.INTERFACES.form.loadFromConfig( conf, node );
		});
			console.timeEnd("js/lib/hit.INTERFACES.form.loadFromDefaultDB query");

	},

	dbData2Config: function(data) {
		console.log(data);
/*		foreach($result as $f) {
            array_push($json['groups'][0]['items'], array(
                'name' => $f['Field'],
                'label' => $f['Field'],
                'type' => 'text',
                'required' => true,
                'sizeLevel' => 2,
                'defaultValue' => array(),
            ));
        }*/
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数根据数据库内容生成
	 * */
	createFromDB: function( dbConfig, formareaID ) {
		//hit.COMPONENT.form.createFromConfig( config, formareaID );
	},

	getFormInfo: function( formareaID ) {
		return hit.COMPONENT.form.getFormInfo( formareaID );
	},

	fillFormInfo: function( formareaID, data ) {
		return hit.COMPONENT.form.fillFormInfo( formareaID, data );
	},

	setTarget: function( formID, targetID, targetFun ) {
		$('#'+formID).attr({targetID: targetID, targetFun: targetFun});
	},

};

if ( hit.INTERFACES ) {
	hit.INTERFACES.form = iForm;
} else {
	hit.INTERFACES = {
		form: iForm
	}
}

})();
