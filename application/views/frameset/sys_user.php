<h2 class="table-header">用户管理</h2>
<div class="user-edit">
</div>
<h2 class="table-header">用户角色定义</h2>
<div class="user-auth">
</div>
<script type="text/javascript">
// 入库单查询功能
hit.load('table_sys_user', $('.user-edit'))

// 角色权限定义
hit.load('table_user_role', $('.user-auth'));
</script>