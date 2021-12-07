import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import naiveui from 'naive-ui'
import 'normalize.css'
import './style/index.scss'
createApp(App).use(router).use(store).use(naiveui).mount('#app')

