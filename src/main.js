import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

//按需引入vant组件库
import getVant from './plugins'
getVant(app)

app.use(store);
app.use(router);

app.mount('#app')
