import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle" 혹시 js에서 부트스트랩 필요하면

createApp(App).use(router).mount('#app')