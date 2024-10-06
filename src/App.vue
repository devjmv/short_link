<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from '@/components/layout/NavBar.vue';
import { computed, ref } from 'vue';
import ClientHead from './components/view/client/ClientHead.vue';
import { modeStorage } from './stores/modeStore';

const mode = modeStorage()
const isDarkMode = ref(mode.mode == 'dark');

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
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer w-1">
        <div className="relative">
          <input @click="mode.change()" v-model="isDarkMode" type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden" />
          <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full" />
          <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition" />
        </div>
      </label>
      <ClientHead v-if="show" class="pt-20" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
input:checked~.dot {
  transform: translateX(100%);
  /* background-color: #132b50; */
}
</style>
