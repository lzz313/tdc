浏览器同步测试工具
===

###功能

----------

1. 同步页面
2. 支持http
3. 支持ie,firefox,chrome,手机浏览器等
4. 支持跨域

###修复bug:

----------



###不支持的功能

----------

1. https
2. post请求
3. 同步滚动等

###web服务

----------

	java -jar sync-browser-1.0-standalone.jar --httpPorts=8080
	
###安装步骤

----------

1. 需要按照chrome插件，插件目录为chrome_plugin，可以直接安装sync_browser.crx
2. 启动web服务
3. 插件点击"选项" 修改缓存服务地址，默认为http://127.0.0.1:8080，根据实际情况修改
4. 需要同步的浏览器打开http://localhost:8080/html/m.html地址
5. 在安装了sync_browser插件的chrome浏览器操作即可同步

###联系方式

----------

hgnom#tom.com