import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import router from './router';
import './assets/main.scss';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';

const pinia = createPinia();
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.use(pinia);
app.mount('#app');
