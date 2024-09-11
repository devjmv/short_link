import ShortenView from '@/views/ShortenView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/shorten",
    },
    {
      path: '/shorten',
      name: 'shorten',
      component: ShortenView
    },
  ]
})

export default router
