import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponentsTest from '@/components/GlobalComponentsTest.vue'

createApp(App)
    .use(store)
    .use(router)
    .component("globalComponentsTest", globalComponentsTest)
    .mount('#app')
