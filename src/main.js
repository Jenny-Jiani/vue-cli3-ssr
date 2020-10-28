// main.js
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import { createRouter } from '@/router'
import { createStore } from '@/store'
import {
  BASEURI,
  DYNAMSOFTURL,
  WebBASEURI,
  CUSTOMERPREFIX,
  SALESPREFIX,
  WEBPREFIX,
} from '@/common/api-config'

import 'ant-design-vue/dist/antd.css'

Vue.prototype.DYNAMSOFTURL = DYNAMSOFTURL
Vue.prototype.WebBASEURI = WebBASEURI
Vue.prototype.CUSTOMERPREFIX = CUSTOMERPREFIX
Vue.prototype.SALESPREFIX = SALESPREFIX
Vue.prototype.WEBPREFIX = WEBPREFIX
Vue.config.productionTip = false
Vue.use(Antd)
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
  const router = createRouter()
  const store = createStore() // +
  const app = new Vue({
    router,
    store, // +
    render: h => h(App),
  })
  return { app, router, store }
}
