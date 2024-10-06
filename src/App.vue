<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from '@/components/layout/NavBar.vue';
import { computed } from 'vue';
import ClientHead from './components/view/client/ClientHead.vue';
import { modeStorage } from './stores/modeStore';

const mode = modeStorage()

const route = useRoute();
const hiddenPaths = ["/client", "/settings"];

const show = computed(() => {
  return hiddenPaths.includes(route.path);
});

</script>

<template>
  <div :class="mode.mode" class="dark:bg-bgdark">
    <header class="bg-white dark:bg-bgdark">
      <NavBar />
    </header>
    <main>
      <ClientHead v-if="show" class="pt-2" />
      <RouterView class="container mx-auto" />
    </main>
  </div>
</template>

<style scoped>
</style>
