<!--tabframe的框架。负责基本的交互操作;同时根据传进来的数据构建内容;-->
<?php //=json_encode($pages)?>
<?php //=json_encode($pageContent)?>
<!--将tab和tab内容分开放，方便js操作。tab放在list里，内容放在content内-->
<!--tab-->
<div class="tab">
<ul>
<?php foreach ($pages as $page): ?>
	<li pageId=<?=$page['pageId']?>><h1><?=$page['pageId']?></h1></li>	
<?php endforeach; ?>
</ul>
<script type="text/javascript">
	$('.tab ul li:first-child').attr("class", "selected");
</script>
<hr/>
<!--content-->
<div class='content'>
	<?php
		$pageNum = count($pages);
		for($i = 0; $i<$pageNum; $i++){
			echo "<div pageId=".$pages[$i]['pageId'].">";
			foreach ($pageContent[$i] as $content){
				echo "dataId: ".$content['dataId']."<br/>	".json_encode($content)."<br/>";
			}
			echo "</div><hr/>";
		}
	?>
</div>
</div>
<script type="text/javascript">
	
</script>

