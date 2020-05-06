import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publico from '../views/categories/Publico.vue'
import Critica from '../views/categories/Critica.vue'
import Industrial from '../views/categories/Industrial.vue'
import Transporte from '../views/categories/Transporte.vue'
import Quienes from '../views/Quienes.vue'
import Marcas from '../views/Marcas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quienes',
    name: 'Quines',
    component: Quienes
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: Marcas
  },
  {
    path: '/categories/Publico',
    name: 'Publico',
    component: Publico
  },
  {
    path: '/categories/Critica',
    name: 'Critica',
    component: Critica
  },
  {
    path: '/categories/Industrial',
    name: 'Industrial',
    component: Industrial
  },
  
  {
    path: '/categories/Transporte',
    name: 'Transporte',
    component: Transporte
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
