import { createApp } from 'vue'
import App from './App.vue'

import language from './utils/languageSwitch'

const app = createApp(App)

app.config.globalProperties.$language = language

app.mount('#app')
