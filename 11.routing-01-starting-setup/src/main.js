import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import UsersList from './components/users/UsersList';
import Page404 from './components/The404';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  },
  routes: [
    { path: '', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        {
          path: ':teamId',
          component: TeamMembers,
          props: true,
          name: 'teams-member'
        }
      ]
    },
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', component: Page404 }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
