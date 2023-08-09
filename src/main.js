import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import sharedComponents from '@/components/shared'
import store from '@/store'

const app = createApp(App)

sharedComponents.forEach(component => {
    app.component(component.name, component)
})

app.use(router)
.use(store)
.mount('#app')