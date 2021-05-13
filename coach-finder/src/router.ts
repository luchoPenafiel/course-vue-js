import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import NotFound from '@/views/NotFound.vue';
import CoachesList from '@/views/CoachesList.vue';
import CoachDetail from '@/views/CoachDetail.vue';
import CoachRegistration from '@/views/CoachRegistration.vue';
import CoachContact from '@/views/CoachContact.vue';
import Requests from '@/views/Requests.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    children: [
      {
        path: 'contact',
        component: CoachContact,
      },
    ],
  },
  {
    path: '/register',
    component: CoachRegistration,
  },
  {
    path: '/requests',
    component: Requests,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },

  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
