require('./bootstrap');
import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
var app = createApp({});
app.component('app-root', App)
app.use(router)
app.mount('#app')