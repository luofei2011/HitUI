#TODO-LIST:

* add random id for all the component itself like the formate before
	
	id = 'GR_' + (+new Date()) + '_' + Math.floor(Math.random() * 10);

* 根据id设置关联关系（主控与被控、父子关系），并在操作时候加入id来控制
> 如：如何在嵌套的情况下正确获取自己的父节点

##tab

####interfaces.tab

* 先判断页面是否存在，再判断切换还是添加
* 切换标签页，并设置当前显示页
* now 设置隐藏,和设置焦点一样，应该抽象出来
* 在tabtitle那儿增加x，点击关闭用


##tree

####

*


##form

####Any

* implement the interfaces first


##global parameters

#### Construct

* init parameter on `index.php` or `tab.php`
* 统一给每一个界面component增加comID做标识

#### parameter.global

*往global里注册组件，并分配comID
