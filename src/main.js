import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';  // Assure-toi que Tailwind est bien importé ici
import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './views/LoginPage.vue';
import SignupPage from './views/SignupPage.vue';
import HelloWord from './components/HelloWorld.vue';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/', component: HelloWord },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
    .use(router)
    .mount('#app');
