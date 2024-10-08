import { defineStore } from 'pinia'
import { ref } from 'vue'

export const ModalStore = defineStore('modal', () => {

  const openLogin = ref(false)
  const openRegister = ref(false)
  const openCreateLink = ref(false)
  const openProperties = ref(false)


  const open = (modal) => {
    if (modal === 'login') openLogin.value = true
    else if (modal === 'register') openRegister.value = true
    else if (modal === 'createLink') openCreateLink.value = true
    else if (modal === 'properties') openProperties.value = true
  }

  const close = () => {
    openLogin.value = false
    openRegister.value = false
    openCreateLink.value = false
    openProperties.value = false
  }

  return { openLogin, openRegister, openCreateLink, openProperties, open, close }
})