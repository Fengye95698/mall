import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList:[]
}
const mutations = {
  addCart(state,payload){
    // console.log(payload);
    let isOldGoods = state.cartList.find(item=>item.id === payload.id)
    if(isOldGoods){
      isOldGoods.count += 1
    }else{
      payload.count = 1;
      state.cartList.push(payload);
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters:{

  },
  actions: {
  },
  modules: {
  }
})
