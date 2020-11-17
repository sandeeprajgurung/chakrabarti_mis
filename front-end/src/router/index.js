import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Students from '@/views/students/Students'
import Results from '@/views/results/Results'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Dashboard',
  component: Dashboard,
  // meta: {
  //   requiresAuth: true
  // }
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
  // meta: {
  //   requiresAuth: true
  // }
},
{
  path: '/students',
  name: 'Students',
  component: Students,
  // meta: {
  //   requiresAuth: true
  // }
},
{
  path: '/results',
  name: 'Results',
  component: Results,
  // meta: {
  //   requiresAuth: true
  // }
},
{
  path: '/login',
  name: 'Login',
  component: Login
}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authRequired && !loggedIn) {
      next('/login');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;