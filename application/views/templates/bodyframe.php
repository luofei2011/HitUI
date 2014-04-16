<!--主要的界面框架部分-->
<div class="global">
	<button style="display:" id="globalRefresh">refresh Needed</button>
	<!--全局刷新函数，根据比对结果，刷新结果不一样的（已经改变的）-->
	<div class="globalbody" output="0" input="">
	</div>
	<script type="text/javascript">
		glofun = function(){$('#globalRefresh').click();}
		formfun = function(){$('#formRefresh').click();}
		treefun = function(){$('#treeRefresh').click();}
		tabfun = function(){$('#tabRefresh').click();}
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
			alert("global!\n"
				+"formbody output:"+formout+" input:"+formin+"\n"
				+"treebody output:"+treeout+" input:"+treein+"\n"
				+"tabbody output:"+tabout+" input:"+tabin+"\n"
			);
			//当前树的标签改变，则将内容content也更改。
			if ( treeout != tabin ){
				tabfun();
			}
		});
		$(function(){
		//首次加载时调用一下
//			formfun();
			treefun();
			tabfun();
		});
	</script>
</div>
<!--数据表部分-->
<div class="formframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<!--refresh the formframe and refresh the dependence part-->
	<button style="display:" id="formRefresh">refresh</button>
	<div class="formbody" output="0" input="formDefault">
	</div>
	<script type="text/javascript">
		$('#formRefresh').on('click', function(){
			var formbody = $('.formbody');
			var formout = formbody.attr("output");
			$.ajax({
				url: '<?php echo base_url('formframe/view'); ?>',
				method: 'post',
				data: {"state": formout}, 
				success: function(msg){
					alert("success");
				},
				error: function(msg){
					alert('error!');
				}
			});
			glofun();
		});
//		formfun();
	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--树装导航框架-->
<div class="treeframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<!--refresh the treeframe and refresh the dependence part-->
	<button style="display:" id="treeRefresh">refresh</button>
	<div class="treebody" nodeIdNow="0" input="treeDefault">
	</div>
	<script type="text/javascript">
		$('#treeRefresh').on('click', function(){
			var treebody = $('.treebody');
			var treeout = treebody.attr("nodeIdNow");
			//输入参数
			//treebody.attr("input", $('.formbody').attr("output"));
			var treein = treebody.attr("input");
			$.ajax({
				url: '<?php echo base_url('treeframe/view'); ?>',
				method: 'post',
				data: {"input": treeout}, 
				dataType: "json",
				success: function(msg){
					var output = msg.output;
					var treehtml = msg.html;
					//刷新treebody
					treebody.empty();
					treebody.append(treehtml);
					//更新输出属性——现有的NodeId
					treebody.attr("nodeIdNow", output);
				},
				error: function(msg){
					alert('error!');
				}
			});
			glofun();//最后全局检查，按需刷新
		});
	//	treefun();					//在最初调用一下，加载tree
	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
<!--tab标签页框架-->
<div class="tabframe">

	<link rel="stylesheet" href="<?php echo base_url(''); ?>" />
	<!--tab部分的刷新触发器-->
	<button style="display:" id="tabRefresh">tab refresh</button>
	<div class="tabbody" output="tabDefalut" input="tabDefault">
	</div>
	<script type="text/javascript">
		$('#tabRefresh').on('click', function(){
			var tabbody = $('.tabbody');
			var tabout = tabbody.attr("output");
			tabbody.attr("input", $('.treebody').attr("output"));	//use the tree's updated nodeId to ensure which content to be shown here.
			var tabin = tabbody.attr("input");
			$.ajax({
				url: '<?php echo base_url('tabframe/view'); ?>',
				method: 'post',
				data: {"nodeId": tabin}, 
				dataType: "json",
				success: function(msg){
					var output = msg.output;
					var tabhtml = msg.html;
					tabbody.empty();
					tabbody.append(tabhtml);
					tabbody.attr("output", output);
				},
				error: function(msg){
					alert('error!');
				}	
			});
			//刷新之后，全局检查一下
			//glofun();
		});
	//	tabfun();
	</script>
	<script type="text/javascript" src="<?php ?>"></script>

</div>
