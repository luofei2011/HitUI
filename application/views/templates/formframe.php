


<?=json_encode($content)?>
<!--表格内容展示-->
<fieldset>
	<?php if(count($content)>0):?>
	<legend>
		Group One:
	</legend>
	<table>
	<?php foreach($content as $item): ?>
		<tr dataId=<?=$item['dataId']?> dataType=<?=$item['dataType']?>>
			<td class="dataName">
				<?=$item['dataName']?>:
			</td>
			<td class="input">
				<input type=""/>
			</td>
			<td class="preData">
				<?=$item['preData']?>
			</td>
			<td class="describe">
				<?=$item['dataDescribe']?>
			</td>
		</tr>
	<?php endforeach; ?>
	</table>
	<input id="setup" type="button" value="Setup"/>
	<input id="change" type="button" value="Changed" />
	<input id="create" type="button" value="CreateNewOne" />

	<?php endif; ?>
</fieldset>
<script type="text/javascript">
//上传数据
dataUpload = function(){
	//将data构建成json数组
	var data ="[]";
	data = eval('('+data+')');
	$('.formframe tr').each(function(){
		//将参数以json格式传递进去[{dataId: 值},{id: value}]
		data.push("{ "+$(this).attr('dataId')+" : "+$(this).find(":input").val()+"}");
	});
	//data['d']='dd';
	var result = 'hi';
	$.ajax({
		url: '<?php echo base_url('formframe/upload'); ?>',
		method: 'post',
		data: {"data": data}, 
		dataType: 'json',
		success: function(msg){
			alert(JSON.stringify(msg));
		},
		error: function(msg){
			alert("upload error!");
		}
	});

};

//结构更新
formSet = function(){
	dataUpload();
	setNewId(-4);//回到初始
};

//当前页面数据更新
function formChange(){
	dataUpload();
	var nowId = Number(getNowId()-1);
	changeNowId(nowId);
};

//创建新节点、建立新的record
var newForm = function(){
	;
};

$("input#setup").click(function(){
	formSet();
});
$('input#change').click(function(){
	formChange();
});
$('input#create').click(function(){
	newForm();
});
</script>
