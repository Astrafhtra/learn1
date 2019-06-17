// vue 开发
//   - 组件开发(协作)
//   - vuex数据管理(应用程序的数据流 难)

// store 超市 new Vuex.Store({
//   state
// })
// 中央 组件 地方
// 读取 this.$store.state.count

// 写 actions,mutations getters
// vuex 不是什么时候都要,大项目离不开
// 公司的概念
   mutation 是唯一可以修改状态的地方

Vue 实现核心mvvm,其他的通过Vue.use()插入进去
this.$store
this.$router

- data() 将会被 state取代
  data只是自身状态的数据
  methods 改变状态的方法，会是actions
