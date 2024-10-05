import { useAuthStore } from '@/stores/auth/auth'
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

router.beforeEach((to) => {
  const store = useAuthStore();

  if (localStorage.getItem("isAuthenticated") && store.user.isAuthenticated == false) {
    store.user.role = localStorage.getItem("role");
    store.user.isAuthenticated = localStorage.getItem("isAuthenticated") == "true" ? true : false;
    store.user.access_token = localStorage.getItem("access_token");
    store.user.refresh_token = localStorage.getItem("refresh_token");
  }

  if (to.meta.requiresAdmin && !(store.user.role == "ADMIN")) {
    return {
      path: "/home",
    };
  }

  if (to.meta.requiresAuth && !store.user.isAuthenticated && !(store.user.role == "USER")) {
    return {
      path: "/home",
    };
  }
});

export default router
