import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins';

import './assets/scss/style.scss'
import './style.css'


const app = createApp(App)

registerPlugins(app)

app.mount('#app')
