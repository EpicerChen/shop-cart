import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/bill',
    name: 'bill',
    component: () => import('../views/BillView.vue')
  },
  {
    path: '/references/CallGlobalComponent',
    name: 'referencesCallGlobalComponent',
    component: () => import('../views/references/CallGlobalComponent.vue')
  }, {
    path: '/references/ComparisonApi',
    name: 'referencesComparisonApi',
    component: () => import('../views/references/ComparisonApi.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
