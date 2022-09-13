# develop-log

## 2022.08.22

* 初始化仓库

## 2022.08.23

* 建立package.json，规划目录，mpx采用lerna管理包，我们不太关注这一方面，所以就不添加lerna了

* setup bable,jest,ts

* 看core中的index导出,有`createApp`,`createPage`,`createComponent`,`watch`,`observable`，还有默认的mpx对象`EXPORT_MPX`,其他的一些工具函数`toPureObject`,`包括ts的store导出函数`就先不实现了

## 2022.08.25

* 发现forceUpdate错误，还以为是框架的报错，最后查到是因为小程序appid写的测试id导致的

* 实现`createApp`,目标是最后执行APP(微信小程序的语法)

* 增加examples目录，用于测试代码，由于微信小程序项目无法引用外部的js，也就是我打包出来的js，所以我手动copy到项目目录

## 2022.09.05

* 更改手动copy，改为tsc直接输出到example/helloworld

* 增加createApp参数，发现问题,参数定义个数不对

## 2022.09.06

* 增加mixins方法，`getMpx`获取mpx实例，用于e2e

## 2022.09.13

* 准备实现transferOptions,也就是对传入createApp类似方法的参数进行改造