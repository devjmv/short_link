import { useAuthStore } from '@/stores/auth/auth'
import { modeStorage } from '@/stores/modeStore';
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
      component: () => import('../views/ClientView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/ClientSettingsView.vue'),
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to) => {
  const store = useAuthStore();
  const mode = modeStorage()

  if (localStorage.getItem("isAuthenticated") && store.user.isAuthenticated == false) {
    store.user.role = localStorage.getItem("role");
    store.user.isAuthenticated = localStorage.getItem("isAuthenticated") == "true" ? true : false;
    store.user.access_token = localStorage.getItem("access_token");
    store.user.refresh_token = localStorage.getItem("refresh_token");
  }

  if (localStorage.getItem("mode")) {
    mode.mode = localStorage.getItem("mode")
  }

  if (to.meta.requiresAuth && !store.user.isAuthenticated && !(store.user.role == "USER")) {
    return {
      path: "/shorten",
    };
  }
});

export default router
