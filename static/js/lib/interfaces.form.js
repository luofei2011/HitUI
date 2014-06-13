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
		html = hit.COMPONENT.theform.createFromConfig( config, formareaID );
		$('.form-area#'+formareaID).empty().append(html);
	},

	appendForm2: function( node, config, formareaID ) {
		node.append(hit.COMPONENT.theform.createFromConfig( config, formareaID ));
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数放在config内
	 * */
	createFromConfig: function( formareaID, config ) {
		return hit.COMPONENT.theform.createFromConfig( config, formareaID );
	},

	/*
	 * 建立与其他部件有链接的表单，部件设置参数根据数据库内容生成
	 * */
	createFromDB: function( dbConfig, formareaID ) {
		//hit.COMPONENT.theform.createFromConfig( config, formareaID );
	},

	getFormInfo: function( formareaID ) {
		return hit.COMPONENT.theform.getFormInfo( formareaID );
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
