<!--主要的界面框架部分-->
<div class="global">
	<button style="display:none" id="globalRefresh">refresh Needed</button>
	<!--全局刷新函数，根据比对结果，刷新结果不一样的（已经改变的）-->
	<div class="globalbody" nowId="-1">
	</div>
	<script type="text/javascript">
		glofun = function(){$('#globalRefresh').click();}
		formfun = function(){$('#formRefresh').click();}
		treefun = function(){$('#treeRefresh').click();}
		tabfun = function(){$('#tabRefresh').click();}
		changeNowId = function(id){
			$('.globalbody').attr('nowId', id);
			formfun();
			tabfun();
		};
		setNewId = function(id){
			$('.globalbody').attr('nowId', id);
			formfun();
			tabfun();
			treefun();
		};
		getNowId = function(){
			return $('.globalbody').attr('nowId');
		};
		$('#globalRefresh').on('click', function(){
			var formbody = $('.formbody');
			var tabbody = $('.tabbody');
			var treebody = $('.treebody');
			var formout = formbody.attr('output');
			var formin = formbody.attr('input');
			var treeout= treebody.attr('nodeIdNow');
			var treein = treebody.attr('input');
			var tabout = tabbody.attr('output');
			var tabin = tabbody.attr('input');
			
			setNewId(Number(getNowId())+1);
		});

		$(function(){
		//首次加载时调用一下
			setNewId(0);	
		});
	</script>
</div>
<!--数据表部分-->
<div class="formframe">

	<link rel="stylesheet" href="<?php echo base_url('static/css/content/tab.css'); ?>" />
	<!--refresh the formframe and refresh the dependence part-->
	<button style="display:none" id="formRefresh">refresh</button>
	<div class="formbody" output="0" input="formDefault">
	</div>
	<script type="text/javascript">
		//刷新form界面
		$('#formRefresh').on('click', function(){
			var formbody = $('.formbody');
			$.ajax({
				url: '<?php echo base_url('formframe/view'); ?>',
				method: 'post',
				data: {"nowId": getNowId()}, 
				dataType: 'json',
				success: function(msg){
					//刷新formbody
					var html = msg.html;
					formbody.empty();
					formbody.append(html);
					//返回信息显示
					var output = msg.output;
				},
				error: function(msg){
					alert('formFrame error!');
				}
			});
		});

	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--树装导航框架-->
<div class="treeframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<!--refresh the treeframe and refresh the dependence part-->
	<button style="display:none" id="treeRefresh">refresh</button>
	<div class="treebody" nodeIdNow="0" input="treeDefault">
	</div>
	<script type="text/javascript">
		//刷新tree界面
		$('#treeRefresh').on('click', function(){
			var treebody = $('.treebody');
			$.ajax({
				url: '<?php echo base_url('treeframe/view'); ?>',
				method: 'post',
				data: {"nowId": getNowId()}, 
				dataType: "json",
				success: function(msg){
					//刷新treebody
					var treehtml = msg.html;
					treebody.empty();
					treebody.append(treehtml);
					//返回信息显示
					var output = msg.output;
				},
				error: function(msg){
					alert('treeFrame error!');
				}
			});
		});
	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--tab标签页框架-->
<div class="tabframe">

	<link rel="stylesheet" href="<?php echo base_url('static/css/content/tab.css'); ?>" />
	<!--tab部分的刷新触发器-->
	<button style="display:none" id="tabRefresh">tab refresh</button>
	<div class="tabbody" output="tabDefalut" input="tabDefault">
	</div>
	<script type="text/javascript">
		//tab(content内容页)刷新函数
		$('#tabRefresh').on('click', function(){
			var tabbody = $('.tabbody');
			$.ajax({
				url: '<?php echo base_url('tabframe/view'); ?>',
				method: 'post',
				data: {"nowId": getNowId()}, 
				dataType: "json",
				success: function(msg){
					//返回界面刷新
					var tabhtml = msg.html;
					tabbody.empty();
					tabbody.append(tabhtml);
					//返回信息显示
					var output = msg.output;
				},
				error: function(msg){
					alert('tabFrame error!');
				}	
			});
		});

	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<script type="text/javascript">	
	changeNowId = function(id){
		$('.globalbody').attr('nowId', id);
		formfun();
		tabfun();
	};
	setNewId = function(id){
		$('.globalbody').attr('nowId', id);
		formfun();
		tabfun();
		treefun();
	};
	getNowId = function(){
		return $('.globalbody').attr('nowId');
	};
</script>
