import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';

// const pinia = createPinia();
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
// app.use(pinia)
app.mount('#app');
