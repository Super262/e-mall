import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const state = {
    userName: undefined,  // 当前登录的用户名
    cartCount: 0  // 购物车商品数量
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});