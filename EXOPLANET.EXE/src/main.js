import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create an instance of the app
const app = createApp(App)

// Use the router on the created app instance
app.use(router)

// Mount the app
app.mount('#app')
