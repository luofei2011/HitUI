<!--主要的界面框架部分-->
<!--数据表部分-->
<div class="formframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<form method="post" action="#">
		<input type="hidden" class="formInfo" value="<?php echo "1"; ?>">
	</form>
	<?php echo file_get_contents(''); ?>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--树装导航框架-->
<div class="treeframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<!--refresh the treeframe according to the 优先顺序-->
	<button id="treeRefresh">refresh</button>
	<div class="treebody" value="<?php echo '0'; ?>">
		<script type="text/javascript">
		$('#treeRefresh').on('click', function(){
			var $body = $('.treebody');
			$.ajax({
				url: '<?php echo base_url('treeframe/view'); ?>',
				method: 'post',
				data: {"state": $('.treebody').attr("value")}, 
				success: function(msg){
					if ($body.attr("value") == '0')
					{
						alert("welcome"+$body.attr("value"));
					}else{
						$body.empty();
					}
					$body.append(msg);
					$body.attr("value", Number($body.attr("value"))+1);
				},
				error: function(msg){
					alert('error!');
				}
			});
		});
		$("#treeRefresh").click();			//在最初调用一下，加载tree
		</script>
	</div>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--tab标签页框架-->
<div class="tabframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<form method="post" action="#">
		<input type="hidden" class="tabInfo" value="<?php echo "0"; ?>">
	</form>
	<?php echo file_get_contents(''); ?>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
