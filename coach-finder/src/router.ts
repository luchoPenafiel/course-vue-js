import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CoachesList from '@/views/CoachesList.vue';
import store from './store';

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/requests',
    component: () => import('@/views/Requests.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/UserAuth.vue'),
    meta: {
      requiresUnauth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuth) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuth) {
    next('/');
  } else {
    next();
  }
});

export default router;
