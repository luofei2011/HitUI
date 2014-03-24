## 2010级毕业设计项目

基于CI框架进行开发，此项目未共同开发项目；参与者：luofei，freemen

#### 使用须知

1. 在本地搭建好git环境，直接克隆本仓库即可！

2. 可直接在master分支上进行开发，但是不能提交二者相异的代码，如：数据库配置和共用文件

3. 需要在项目中添加文件需要在README中更新说明文档

4. 开发通用的接口后需要完善说明文档

5. 克隆完代码后一定要更新自己本地的`.gitignore`文件,添加如下内容

>

    .gitignore
    application/config/config.php
    application/config/database.php

#### 新建文件须知

目前网站所有的静态文件(js，图片，css)都放在网站根目录的`staitc`目录下

1.js文件命名：请以jquery开头，后面是模块名，然后是功能名结尾, 如：
    
    jquery.main.resize.js # main代表全局
    jquery.tree.expand.js # tree代表树形导航

2.css文件命名：除了统一的样式都在common里面以外，单独模块的css请已模块名命名。

3.图片放置要求：小图表统一放在icons目录下，按钮类放在button目录下，通用的放在img目录，另外的按功能新建文件夹


#### 通用样式使用须知(`common.css`)

该文件中包含了网站重置，通用的css样式，如浮动，统一的间距，图表样式，超链接样式，按钮样式等。
若需要在该文件中添加新的样式，请添加注释说明.

#### 通用js使用须知

如果写了全局的函数一定要在这个地方说明！并且该函数要有详细的解释(参数，返回值，功能)

__resize处理__

#### js/css命名规制

1.js中尽量不要使用全局变量。

2.css中class命名的时候最好加上前缀，目前我开发的时候加上hit作为前缀

3.css中如果要以id命名一定不要重复，不要使用这些通用的id(id,class,id1,wrapper,main,content,footer,header)
