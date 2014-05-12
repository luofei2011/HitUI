## 对整个工作流的理解

#### 从入口说起

1. 在`config/router.php`中说明了，默认入口为controller/welcome.php`
2. 在`controller/welcome.php`中会先进入`controller/login.php`进行验证。我们然后调用`view/index.php`载入框架。_我们可以访问`controller/welcome2index`直接跳过认证_
3. 在`view/index.php`中，定义了页面框架。并引入了`static/js/load.js`作为整个动作的入口
4. `static/js/load.js`定义了全局入口*__hit对象__*，并在最后用`controller/load.php的frameset()`加载各个页面部件。
5. `frameset`就只是加载`views/frameset/`底下对应的页面而已。
6.  
