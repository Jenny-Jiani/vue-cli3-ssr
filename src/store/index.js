import Vue from 'vue'
import Vuex from 'vuex'
import web from './module/web'
Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    modules: {
      web,
    },
  })
}
