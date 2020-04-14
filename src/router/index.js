import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publico from '../views/categories/Publico.vue'
import Mineria from '../views/categories/Mineria.vue'
import Industrial from '../views/categories/Industrial.vue'
import Quienes from '../views/Quienes.vue'

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
    path: '/categories/Publico',
    name: 'Publico',
    component: Publico
  },
  {
    path: '/categories/Mineria',
    name: 'Mineria',
    component: Mineria
  },
  {
    path: '/categories/Industrial',
    name: 'Industrial',
    component: Industrial
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
