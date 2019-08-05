1. 基于vue2.0 + Vuex + VueRouter 全家桶实现方案来模拟仿网易云webapp项目 css预编译工具使用的是sass,音乐上下滚动加载用的是betterscroll,全面采用es6风格代码。
2. 解决了哪些问题:
  - 图片懒加载 vue-lazyload
  - 前后端分离 使用node.js NeteaseCloundMusicAPI proxy  8080 + 3000
  - fastclick
  - 设计了store: songs + index + song + singer + mode + favoriteList + searchHistory + playHistory
  - iconfont
  - eslint 代码风格

  - 上班, vue项目,分析清除目录结构
    1. components/ 跟路由挂钩 工作的入口
    2. store/ 全局共享 分模块 了解关键状态
    3. common/公共组件不用写
    4. api/ 前后端的协作方式