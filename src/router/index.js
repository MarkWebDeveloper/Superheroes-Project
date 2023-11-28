import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import LoginForm from '@/components/login/LoginForm.vue' */



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue')
    }

  ]
})

router.beforeEach( (to,from) => {
  const store = useAuth()

  if (to.meta.requiresAuth && !store.objectos. isAuthenticated) {
    return { name: 'loginForm'}
  }
})

export default router
