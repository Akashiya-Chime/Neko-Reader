# ReadForMe

[TOC]

## 需求

> 目标是开发一个阅读器，最不济也应该支持 `.txt` 格式文件。我需要它具有以下几个特点：
>
> 一、体积要小，尽量控制在 20MB 以内（若成品好，可适量增加）
> 二、有一定的自定义选项（字体，字号，字间距？行间距？背景颜色？）
> 三、能够支持左右分页
> 四、具有一定的功能（勾划文字，笔记，笔记记录）
> 五、能够支持一定数量的快捷键以方便我操作（翻页、笔记）
> 六、界面干净简单，运行速度快
> 七、能够记录上次阅读文件和位置
> 八、至少支持 Windows 平台
>
> 。。。。。。

## 开发依赖

***实际上是要学的技术。。。***

- **Electron** -> 作为整个软件骨架，能够比较方便地编译成可执行程序
- **vuejs** -> 考虑到今年可能会出 3.0 版本，所以可能会学习使用 vue3 来作为开发框架使用
  + vue 全家桶（没学，还搞不懂每个的用处，甚至不知道是否都要学）
    * vue-router
    * vuex
    * vue-cli
    * vue-devtools
  + nodejs（没办法，虽然可能没有后端的内容，但是 electron 和 vue 都和 node 有关系）
  + webpack（vue 会使用到，可能到后期优化的时候也会用到）
  + typescript（听说 vue3.0 会完全拥抱 ts，学学看有没啥有趣的可以加进来）
- **必要的 html** -> 因为 electron 是以 web 的形式展示，另外需要将文件中的数据展示到 html 上，可能得加深学习一下。
- **必要的 js** -> 核心语言
  + promise（文件读取，为了速度，选择异步）
  + async/await（好像是比 promise 更高级的异步）
- **必要的 css** -> 没有好看的外观，就等于没做
  + less（比css高级点，用的时候要编译成 css，需要在 webpack 中设置）
  + sass（好像和 less 差不多？）
- **设计基础** -> 感觉应该不归属于技术，而且这牵扯到方方面面，考虑先从文字排版的平面设计和一些简单的像素绘画入手

## 代码仓库

（还没建）

## 参考文档

- [Electron (9.1.2)](http://www.electronjs.org/docs)
- [Node.js (14.7.0)](http://nodejs.cn/api/)
- [Webpack (4.44.1)](https://www.webpackjs.com/concepts/)
- [TypeScript (3.1)](https://www.tslang.cn/docs/home.html)
- [Less (3.0)](https://less.bootcss.com/)
- [Sass](https://www.sass.hk/docs/)

