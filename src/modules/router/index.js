import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profesor/ingresar',
    name: 'ingresar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Profesor.vue')
  },
  {
    path: '/profesor/buscar',
    name: 'buscar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/BuscarProfesor.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router