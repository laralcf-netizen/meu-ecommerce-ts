import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from './App.vue'
import router from './router'
import { setPrimeVue } from "./modules/primevue.modules"

const app = createApp (App)
setPrimeVue(app)
app.use(createPinia())
app.use(router)

app.mount('#app')
