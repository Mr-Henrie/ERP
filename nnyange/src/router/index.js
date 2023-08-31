import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('/src/views/main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('/src/views/pages/home.vue'),
          meta: {
            authguarded: true
          }
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('/src/auth/main.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('/src/auth/login.vue'),
          meta:{
            authguarded: false
          }
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('/src/auth/signup.vue'),
          meta:{
            authguarded: false
          }
        },
        {
          path: 'reset-password',
          name: 'pass_reset',
          component: () => import('/src/auth/pass_reset.vue'),
          meta:{
            authguarded: false
          }
        },
      ]
    },
  ]
})

export default router
