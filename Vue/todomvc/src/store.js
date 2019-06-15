import Vue from 'vue';
import Vuex from 'vuex';

// 启动应用状态管理
Vue.use(Vuex);

// 全局共享
const state = {
  count:0
}
// state改变,actions是交给你调用的,increament,不能直接修改state,count
// state.count++ 只有mutation能修改
// 只有actions才可以触发mutation,只有mutation才可以修改state
const mutations = {
  increament (state){
    state.count++;
  }
}
const actions = {
  increament:({commit})=>commit('increament')
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})