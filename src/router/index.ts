import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/deleted',
    name: 'deleted',
    component: () => import('../views/DeletedView.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router