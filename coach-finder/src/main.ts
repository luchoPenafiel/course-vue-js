import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Global components
import BaseButton from '@/components/Button/Button.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);

app.mount('#app');
