# vue-eleme

> y

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 准备工作
### 请求数据
 - js  -> Ajax
 - 微信小程序  -> wx.request
 - vue  -> axios

 安装axios  ：  npm install axios --save
 (--save) 保存到生产环境中  dependencies

### 比较优雅的滚动 (滴滴开源的 组件 better-sccroll)
 - npm install better-scroll --save

### 使用stylus 来编写 css
 - npm install stylus --save-dev
 还需要loader
 - npm install stylus-loader --save-dev


- Vue.prototype.$http = axios // 将axios挂载到vue的原型链上

- this.$nextTick()  //页面加载之后再执行

- 
 <div class="menu-wapper" ref="menuWrapper">
 this.$refs.menuWrapper 绑定滚动的区域