CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_auth_v` AS select distinct `b`.`user_id` AS `user_id`,`b`.`user_name` AS `user_name`,`c`.`menu_code` AS `menu_code`, `c`.`menu_name` AS `menu_name` from (`user_role` `a` join `sys_user` `b` join `role_auth` `d` join `menu` `c`) where ((`a`.`user_id` = `b`.`user_id`) AND (`a`.`role_code` = `d`.`role_code`) AND (`d`.`menu_code` = `c`.`menu_code`));

#TODO-LIST:

* add random id for all the component itself like the formate before
	
	id = 'GR_' + (+new Date()) + '_' + Math.floor(Math.random() * 10);

* 根据id设置关联关系（主控与被控、父子关系），并在操作时候加入id来控制
> ~~如：如何在嵌套的情况下正确获取自己的父节点~~<-use closest

##tab

* ~~各种数据清除~~
* 各种接口
* ~~maybe we can let the tab lazy-load~~

####interfaces.tab

* ~~先判断页面是否存在，再判断切换还是添加~~
* ~~切换标签页，并设置当前显示页~~
* ~~在tabtitle那儿增加x，点击关闭用~~
* ~~set focus~~


##tree

* ~~为每棵树注册独立ID~~
* ~~设置数据输入~~输出接口

####css

* ~~icon!!!!~~

####component.tree

* ~~set the default focus~~
* ~~when there is no default focus, it will notice errors that `openNode` does not have length~~

####interfaces.tree

* 设置通过简单变量生成树的函数（如输入name, code, father, 自动生成level, leafFlag和index ）,或者图形界面


##form

####Any

* ~~implement the interfaces first~~

####component.theform

* ~~selected checkbox by default~~
* deal with the checkboxs when they are required

* ~~*deal with the datas and return*~~
* ~~*create a interface for setting the data's configuration of this FORM*~~


##global parameters

#### Construct

* init parameter on `index.php` or `tab.php`
* 统一给每一个界面component增加comID做标识

#### parameter.global

#### others

* del or abstract the parameter.global function on other components' interfaces

## requirement

*往global里注册组件，并分配comID

* jibenzujian use luofei's

* tree demo  bumen dingyi(add by myself)

* yonghudingyi  <!-- jiaosedingyi -->  caidandingyi (grid)

----
////

# FROM June, 13rd: demo time

## component
#### complete the interfaces
* add tabs
* checkbox required
* open empty tab...default
* ~~tab num max? or drawer~~
* open tabs will combine...

## DEMO
#### combine the tree and the form
* ~~find how to get a line of the table~~
* write the data to the table
* DB data
* general form of the page with just different config


## structure
#### `parameter.globle` is so ugly..

## simple form config flow:
1 create a table configuration table_xx.js under `js/config`
2 make a page under `views/` using the config in the 1st step with the code before
>
	hit.CONFIG.table_inv_bill_main.funcArr = ['edit', 'delete', 'save'];
	hit.CONFIG.table_inv_bill_main.condition = [];
	hit.load('table_inv_bill_main', $('.gr'))
3 refer the js config in the 1st step to `views/index.php`
4 in `js/config/bind_config.js`, bind the tree nodes' id to with the page mentioned in 2nd step
