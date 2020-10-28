import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Web/_Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Web/Company/HomePage.vue'),
      },
    ],
  },
]

export function createRouter() {
  return new Router({
    mode: 'history', //一定要是history模式
    routes: routes,
  })
}
