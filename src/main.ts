import { createApp } from 'vue'
import router from './router/indx'
import App from './App.vue'
import './assets/css/style.scss'
import './assets/css/media.scss'
const app = createApp(App)
app.use(router)
app.mount('#app')
