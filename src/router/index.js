import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/playerOverview',
      name: 'playerOverview',
      component: () => import('@/views/PlayerView.vue')
    },
    {
      path: '/tierlist',
      name: 'tierlist',
      component: () => import('@/views/TierlistView.vue')
    }
  ]
})

export default router
