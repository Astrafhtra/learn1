- DOM 之后MVVM兴起
MVVM封装了DOM(vue react),让其更高效

- 组件开发 UI开发
分为多个组件,拼装页面 是一个类
实例化一下,就可以用了 复用
- 组件是一个种子,里面有很多东西的
template  render()
css 
js  isliked


- React 和 Vue 都是MVVM的一种实现
react用来做后台界面
vue适合做用户界面
挂载点 界面跟组件的关系,界面<-组件<-html
DOM 被封装成组件类
constructor this.state 数据部分
模板部分 render
setData setState({})

- 模板里数据的细化
es6字符串模板 每次编译
setState this.render();
状态和模板结合的地方在模板的编译,插入数据 
setState 驱动模板重新编译一下 数据驱动