import { createApp } from 'vue';
import router from './routers/index';
import App from './App.vue';
import 'bulma/css/bulma.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
