export const SET_VISIBLE_MAIN_SUBMENU = 'SET_VISIBLE_MAIN_SUBMENU'
export const SET_VISIBLE_SUBMENU = 'SET_VISIBLE_SUBMENU'

const web = {
  state: {
    visibleMainSubMenu: false,
    visibleSubMenu: false,
  },
  getters: {
    getVisibleMainSubMenu: state => state.visibleMainSubMenu,
    getVisibleSubMenu: state => state.getVisibleSubMenu,
  },
  actions: {},
  mutations: {
    [SET_VISIBLE_MAIN_SUBMENU](state, payload) {
      const { visibleMainSubMenu } = payload
      state.visibleMainSubMenu = visibleMainSubMenu
    },
    [SET_VISIBLE_SUBMENU](state, payload) {
      const { visibleSubMenu } = payload
      state.visibleSubMenu = visibleSubMenu
    },
  },
}
export default web
