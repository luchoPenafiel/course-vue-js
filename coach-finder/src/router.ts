import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CoachesList from '@/views/CoachesList.vue';

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
    component: () => import('@/views/CoachDetail.vue'),
    props: true,
    children: [
      {
        path: 'contact',
        component: () => import('@/views/CoachContact.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('@/views/CoachRegistration.vue'),
  },
  {
    path: '/requests',
    component: () => import('@/views/Requests.vue'),
  },
  {
    path: '/:notFound(.*)',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
