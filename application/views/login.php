<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>系统登录</title>
	<link rel="stylesheet" href="<?php echo base_url('static/css/common.css');?>">
</head>
<style>
	body {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: rgba(37, 37, 37, .1);
		font: 12px 微软雅黑;
	}
	.wrapper {width: 350px; height:150px;overflow: hidden;border: 1px solid #999;position: absolute;top:50%;margin-top:-75px;left:50%;margin-left:-175px;}
	.header {background: url('<?php echo base_url("static/img/header.png");?>') repeat-x 0 0;border-bottom: 1px solid #bbb;height: 26px;line-height: 26px;}
	.header span {margin-left: 8px;}
	.content {padding: 15px 10px;background: #fff;}
	.left, .right {display: inline-block;}
	.left {width: 50px;}
	.login-item {margin-left: 10px; margin-bottom: 10px;}
	.hit-button {font-family: 微软雅黑;}
	input {margin:0;}
	.hit-button-txt {vertical-align: middle;}
	.error {
		background: url(<?php echo base_url('static/img/error.gif');?>) no-repeat 50% 50%;
		width: 14px;
		height: 16px;
		overflow: hidden;
		display: none;
		cursor: default;
		vertical-align: middle;
		margin-top: -6px;
	}
	.right {height: 22px;line-height:22px;}
</style>
<body>
	<div class="wrapper">
		<div>
			<div class="header">
				<span>用户登录</span>
			</div>
			<div class="content">
				<div class="login-item">
					<div class="left">
						<label for="">帐号：</label>
					</div>
					<div class="right">
						<input type="text" id="uname">
						<span class="error"></span>
					</div>
				</div>
				<div class="login-item">
					<div class="left">
						<label for="">密码：</label>
					</div>
					<div class="right">
						<input type="password" id="pwd">
						<span class="error"></span>
					</div>
					<span><a href="#">忘记密码？</a></span>
				</div>
				<div class="login-item">
					<div class="left"></div>
					<div class="right">
						<a href="" class="hit-button" id="submit">
							<span class="hit-button-txt">登录</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
<script type="text/javascript" src="<?php echo base_url('static/js/jquery.js');?>"></script>
<script>
$(function() {
	$('input').on('blur', function() {
		if (!this.value) {
			$(this).next().css('display', 'inline-block');
		} else {
			$(this).next().hide();
		}
	});

	$('#submit').on('click', function() {
		var uname = $('#uname').val(),
			pwd = $('#pwd').val();

		if (!uname) {
			alert('帐号不能为空！');
			return false;
		}
		
		$.ajax({
			url: '<?php echo base_url("login/login_sys");?>',
			method: 'post',
			data: {uname: uname, pwd: pwd},
			success: function(msg) {
				// console.log(msg);
				if (msg === "false") {
					alert('您的帐号或者密码有误！');
				} else if (msg === "true") {
					window.location.href = "<?php echo base_url();?>";
				}
			}
		});
		return false;
	});
});
</script>
</body>
</html>