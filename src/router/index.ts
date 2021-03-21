import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Video from '../views/Video.vue';
import VideoDetails from '../views/VideoDetails.vue';
import NotFound from '../views/NotFound.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
  },
  {
    path:'/',
    name:'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import('../views/Video.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/videos/:id',
    name: 'VideoDetails',
    component: () => import('../views/VideoDetails.vue'),
    //this route accept properties
    props: true,
  },
  // redirects in case that user typed old path ('/all-videos')
  {
    path: '/all-videos',
    redirect: '/videos',
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/BoardUser.vue')
  },
  // catch all the route that is not called by any of these route objects above
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});

/*
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
*/
export default router;
