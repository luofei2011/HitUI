<input type="text" name="num" id="num">
<button id="insert_users">插入用户</button>
<script type="text/javascript">
$(function() {
    $('#insert_users').on('click', function() {
        $.ajax({
            url: '<?php echo base_url("load/insert_users");?>',
            method: 'post',
            data: {"num": $('#num').val()},
            success: function(msg) {
                var obj = JSON.parse(msg);

                if (obj.status === 'ok')
                    alert('插入成功!');
            },
            error: function(msg) {
                alert('插入失败!');
            }
        });
    });
});
</script>
