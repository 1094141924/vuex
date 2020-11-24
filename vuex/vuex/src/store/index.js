import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './multation'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex);


let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store;