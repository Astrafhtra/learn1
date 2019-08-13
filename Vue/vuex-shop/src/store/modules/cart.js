const state = {
  items: []
};
const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(
      item => item.id === product.id)
    cartItem.quantity++;
  }
};
const getters = {};
const actions = {
  addProductToCart({state, commit}, product) {
    if (product.inventory > 0) {
      // const
      // - 把商品参加进inventory 要什么逻辑
      // - 检查下items里有没有
      const cartItem = state.items.find(
        item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart',
         { id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // - 有   + 1
      // - 没有 push
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}