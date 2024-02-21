import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/home',
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/plugins/app/views/home.vue'),
  // },
  {
    path: '/',
    name: 'Shopping List - List',
    component: () => import('@/plugins/lib@shopping-list/shopping-lists/shopping-lists.vue'),
  },
  // {
  //   path: '/shopping-list/:id',
  //   name: 'Shopping List - Detail',
  //   component: () => import('@/plugins/lib@shopping-list/shopping-list-detail/shopping-list-detail.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
