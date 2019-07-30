import * as types from '../mutation-types'
export default {
  state: {
    user: null,
    userDistance: null,
  },
  getters:{
    user:state => state.user,
    userDistance:state => state.userDistance
  },
  mutations:{
    [types.SET_USER](state,data){
      state.user = data
    }
    // [types.SET_USER_DATA](state,data){
    //   state.userDistance = data
    // },
  },
  actions:{
    setUser(store,data){
      store.commit(types.SET_USER,data)
    }
  }
}