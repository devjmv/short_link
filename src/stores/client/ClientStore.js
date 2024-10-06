import { defineStore } from 'pinia'
import { ref } from 'vue'
import ClientService from './ClientService';

export const ClientStore = defineStore('client', () => {

  const currentPage = ref(0);
  const pageSize = ref(8);
  const totalPages = ref(0);

  function getLinks(accessToken, page = 0, size = 12) {
    const params = { page, size };
    const service = new ClientService()
    return service.getLinks(accessToken, params)
  }

  return { currentPage, pageSize, totalPages, getLinks }
})
