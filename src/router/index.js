import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore} from '../stores/user.js'

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


/*beforeEach nos inyecta tres parámetros en la función de callback: to: Es el objeto router con la 
información de la ruta a la que voy. from: Es el objeto router con la información
 de la ruta de la que vengo. next: Es la función que me permite reanudar la navegación. */

router.beforeEach( (to, from) => {

  const store = useAuthStore()
  
  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
  
  return { name: 'login'}
  }
  
  })


export default router


