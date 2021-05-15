import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Global components
import BaseButton from '@/components/Button/Button.vue';
import BaseCard from '@/components/Card/Card.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
