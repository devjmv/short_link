import { defineStore } from 'pinia'
import { ref } from 'vue'
import ClientService from './ClientService';

export const ClientStore = defineStore('client', () => {

  const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE

  const currentPage = ref(0);
  const pageSize = ref(PAGE_SIZE);
  const totalPages = ref(0);

  function getLinks(accessToken, page = currentPage.value, size = pageSize.value) {
    const params = { page, size };
    const service = new ClientService()
    return service.getLinks(accessToken, params)
  }

  return { currentPage, pageSize, totalPages, getLinks }
})
