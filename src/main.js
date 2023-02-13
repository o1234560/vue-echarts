import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue2全局引用echarts
// import * as echarts from 'echarts' // 导入echarts
// Vue.prototype.$ecahrts = echarts

createApp(App).use(store).use(router).mount('#app')
