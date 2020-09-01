import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
      set_data(state, data) {
        for (let key in data) {
          state[key] = data[key]
        }
      },
    },
    actions: {},
  })
}
