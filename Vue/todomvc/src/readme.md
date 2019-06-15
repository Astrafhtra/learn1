- el:#root 根挂靠结点
- App component + vue-router + vuex 混合而一起的应用


new Vue({
  el:'#app',
  render: h=>h(App)
})

- vue的难点 数据管理
组件状态,data(){}
两兄弟组件共享状态
props 传递过去
应用状态


- 当页面多个组件间要共享状态
将共享状态放置在这些组件的父组件的data来管理,
状态唯一,放在共同的父组件中,方便管理
如果不统一,状态有可能不同步,
父子组件通信,v-on:increament="increamentCount"
props:  this.$emit('increament');


- 麻烦, 找父节点麻烦,this.$emit()
很多状态要共享,很多组件,组件管辖也错综复杂
App 全局数据管理 vuex 应用状态管理