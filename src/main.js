import { createApp } from 'vue'
import App from './App.vue'

import i18n from './i18n'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$API = 'https://aleksandr-diakov-portfolio.herokuapp.com'

app.use(router)
	.use(i18n)
	.mount('#app')
