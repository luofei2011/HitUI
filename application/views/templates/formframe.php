<!--表格内容展示-->
<fieldset class="formfield">
	<?php if($isEmpty != 1):?>
	<!--有的话，展示已有内容-->
	<legend>
		Change Data
	</legend>
	<table>
	<?php foreach($content as $item): ?>
		<tr dataId=<?=$item['dataId']?> dataType=<?=$item['dataType']?>>
			<td class="dataName">
				<?=$item['dataName']?>:
			</td>
			<td class="input" valueId="<?=$item['Id']?>">
				<input type="" value="<?=$item['value']?>" />
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
	
	<?php else: ?>
	<!--空的话，提示新增内容-->
	<legend>
		Create new Data
	</legend>
	<table>
		
	</table>
	
	<?php endif; ?>
</fieldset>

<!--树的展示-->
<fieldset class="treefield">
	<legend>
		Change Tree Structure
	</legend>
	<table>
		<tr>
			<td>
				父亲节点
			</td>
		</tr>
	</table>
	


</fieldset>

<script type="text/javascript">
//上传数据
dataUpload = function(){
	//将data构建成json数组
	var data ="[]";
	data = eval('('+data+')');
	$('.formframe tr').each(function(){
		//将参数以json格式传递进去[{数据项的编号: 值,Id: value},{}]
		data.push({ id : $(this).find(".input").attr('valueId'), value :$(this).find(":input").val() } );
	});
	//data['d']='dd';
	var result = 'hi';
	$.ajax({
		url: '<?php echo base_url('formframe/upload'); ?>',
		method: 'post',
		data: {"data": data}, 
		dataType: 'json',
		async: false,		//不异步执行，等ajax执行结束才更新
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
	setNewId(-2);//回到初始nodeId
};

//当前页面数据更新
function formChange(){
	dataUpload();
	var nowId = Number(getNowId());
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
