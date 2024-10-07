import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import ClientService from './ClientService';

export const ClientStore = defineStore('client', () => {

  const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE

  const currentPage = ref(0);
  const pageSize = ref(PAGE_SIZE);
  const totalPages = ref(0);
  const order = ref("createdAt");
  const listLinksGest = ref(JSON.parse(localStorage.getItem('listLinksGest') || '[]'));

  const addLinkGest = (link) => {
    listLinksGest.value.push({ ...link });
    saveLink();
  };

  const clearLink = () => {
    listLinksGest.value = [];
    saveLink();
  };

  const saveLink = () => {
    localStorage.setItem('listLinksGest', JSON.stringify(listLinksGest.value));
  };

  watch(listLinksGest, saveLink, { deep: true });

  function createLinkFree(originUrl) {
    const service = new ClientService()
    return service.createLinkFree(originUrl)
  }

  function getLinks(accessToken, page = currentPage.value, size = pageSize.value, sort = order.value) {
    const params = { page, size, sort };
    const service = new ClientService()
    return service.getLinks(accessToken, params)
  }

  function createLink(accessToken, originUrl, shortUrl) {
    const service = new ClientService()
    return service.createLink(accessToken, originUrl, shortUrl)
  }

  return { currentPage, pageSize, totalPages, order, listLinksGest, getLinks, createLink, createLinkFree, addLinkGest, clearLink }
})
