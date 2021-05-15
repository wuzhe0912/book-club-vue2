import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/Props.vue'),
  },
  {
    path: '/routerDemo',
    name: 'RouterDemo',
    component: () => import('../views/RouterDemo'),
    children: [
      {
        path: '',
        name: 'RouterDemoHome',
        component: () => import('@/views/RouterDemo/RouterDemoHome.vue'),
      },
      {
        path: 'id',
        name: 'RouterDemoID',
        component: () => import('@/views/RouterDemo/RouterDemoID.vue'),
      },
      {
        path: 'content',
        name: 'RouterDemoContent',
        component: () => import('@/views/RouterDemo/RouterDemoContent.vue'),
      },
    ],
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
