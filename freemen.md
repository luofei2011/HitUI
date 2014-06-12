#TODO-LIST:

* add random id for all the component itself like the formate before
	
	id = 'GR_' + (+new Date()) + '_' + Math.floor(Math.random() * 10);

* 根据id设置关联关系（主控与被控、父子关系），并在操作时候加入id来控制
> 如：如何在嵌套的情况下正确获取自己的父节点

##tab

* ~~各种数据清除~~
* 各种接口
* ~~maybe we can let the tab lazy-load~~

####interfaces.tab

* 先判断页面是否存在，再判断切换还是添加
* 切换标签页，并设置当前显示页
* now 设置隐藏,和设置焦点一样，应该抽象出来
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