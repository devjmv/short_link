import ClientSettingsView from '@/views/ClientSettingsView.vue'
import ClientView from '@/views/ClientView.vue'
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
    {
      path: '/client',
      name: 'client',
      component: ClientView
    },
    {
      path: '/settings',
      name: 'settings',
      component: ClientSettingsView
    },
  ]
})

export default router
