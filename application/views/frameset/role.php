<h2 class="table-header">角色管理</h2>
<div class="role-edit">
</div>
<h2 class="table-header">角色权限定义</h2>
<div class="role-auth">
</div>
<script type="text/javascript">
// 入库单查询功能
hit.CONFIG.table_role.funcArr = ['add', 'delete', 'save'];
hit.CONFIG.table_role.condition = [];
hit.load('table_role', $('.role-edit'))

// 角色权限定义
hit.load('table_role_auth', $('.role-auth'));
</script>