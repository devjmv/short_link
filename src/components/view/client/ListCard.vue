<script setup>
import ArrownLeftIcon from '@/components/icons/ArrownLeftIcon.vue';
import ArrownRigthcon from '@/components/icons/ArrownRigthcon.vue';
import CardLink from '@/components/view/client/CardLink.vue';
import { useAuthStore } from '@/stores/auth/auth';
import { ClientStore } from '@/stores/client/ClientStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const store = ClientStore();
const auth = useAuthStore();
const { currentPage, totalPages } = storeToRefs(store);

const links = ref([]);
const textAlert = ref('');
const isLoading = ref(true);

const handlePageChange = async (newPage) => {
  isLoading.value = true;
  const response = await store.getLinks(auth.user.access_token, newPage);
  isLoading.value = false;
  if (response.success === false) {
    textAlert.value = response.message;
    console.error("Error fetching links:", response.message);
  } else {
    currentPage.value = response.number || 0;
    totalPages.value = response.totalPages || 1;
    links.value = response.content || [];
    textAlert.value = '';
  }
};

const listLinks = async () => {
  isLoading.value = true;
  const response = await store.getLinks(auth.user.access_token);
  isLoading.value = false;
  if (response.success === false) {
    textAlert.value = response.message;
    console.error("Error fetching links:", response.message);
  } else {
    currentPage.value = response.number || 0;
    totalPages.value = response.totalPages || 1;
    links.value = response.content || [];
    textAlert.value = '';
  }
}

const changeState = async (stateId) => {
  const response = await store.changeState(auth.user.access_token, stateId);
  if (response.success === false) {
    textAlert.value = response.message;
    console.error("Error fetching links:", response.message);
  } else {
    listLinks();
  }
}

onMounted(() => {
  listLinks();
});
</script>

<template>
  <div class="pt-6 pb-10 grid min-h-full place-items-center w-full gap-4 px-4">
    <div class="mx-auto">
      <main>
        <div v-if="isLoading" class="flex justify-center items-top">
          <div
            class="mt-4 font-regular relative block rounded-lg bg-white p-4 text-base leading-5 text-dark opacity-100"
            style="display: inline-block; margin-left: auto; margin-right: auto;">
            <div class="mr-12">Loading ...</div>
          </div>
        </div>
        <div class="flex justify-center items-top" v-else-if="textAlert !== ''">
          <div
            class="mt-4 font-regular relative block rounded-lg bg-yellow-500 p-4 text-base leading-5 text-dark opacity-100"
            style="display: inline-block; margin-left: auto; margin-right: auto;">
            <div class="mr-12">{{ textAlert }}</div>
          </div>
        </div>
        <div v-else class="px-4">
          <div v-if="totalPages > 1" class="lg:hidden flex justify-center items-center space-x-1.5 pb-6">
            <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 0"
              class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-blueFunko-900 focus:text-white focus:bg-blueFunko-900 focus:border-blueFunko-900 active:border-blueFunko-900 active:text-white active:bg-blueFunko-900 disabled:pointer-events-none disabled:opacity-50">
              <ArrownLeftIcon />
            </button>

            <button v-for="page in totalPages" :key="page" @click="handlePageChange(page - 1)"
              :disabled="page - 1 === currentPage"
              class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-blueFunko-900 focus:text-white focus:bg-blueFunko-900 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:bg-blueFunko-900 disabled:text-white">
              {{ page }}
            </button>

            <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage + 1 >= totalPages"
              class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-bg-blueFunko-900 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-blueFunko-600 disabled:pointer-events-none disabled:opacity-50">
              <ArrownRigthcon />
            </button>
          </div>
          <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 2xl:grid-cols-4">
            <CardLink v-for="(item, index) in links" :key="index" :links="item" class="mb-6"
              @changeState="changeState" />
          </div>
          <div v-if="totalPages > 1" class="flex justify-center items-center space-x-1.5">
            <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 0"
              class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-blueFunko-900 focus:text-white focus:bg-blueFunko-900 focus:border-blueFunko-900 active:border-blueFunko-900 active:text-white active:bg-blueFunko-900 disabled:pointer-events-none disabled:opacity-50">
              <ArrownLeftIcon />
            </button>

            <button v-for="page in totalPages" :key="page" @click="handlePageChange(page - 1)"
              :disabled="page - 1 === currentPage"
              class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-blueFunko-900 focus:text-white focus:bg-blueFunko-900 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:bg-blueFunko-900 disabled:text-white">
              {{ page }}
            </button>

            <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage + 1 >= totalPages"
              class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-blueFunko-900 hover:border-bg-blueFunko-900 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-blueFunko-600 disabled:pointer-events-none disabled:opacity-50">
              <ArrownRigthcon />
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
