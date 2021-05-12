import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: null,
  },
  {
    path: '/coaches/:id',
    component: null,
    children: [
      {
        path: 'contact',
        component: null,
      },
    ],
  },
  {
    path: '/register',
    component: null,
  },
  {
    path: '/requests',
    component: null,
  },
  {
    path: '/:notFound(.*)',
    component: null,
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
