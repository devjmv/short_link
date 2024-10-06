import { defineStore } from 'pinia'
import { ref } from 'vue'

export const ModalStore = defineStore('modal', () => {

  const openLogin = ref(false)
  const openRegister = ref(false)

  const open = (modal) => {
    if (modal === 'login') openLogin.value = true
    else if (modal === 'register') openRegister.value = true
  }

  const close = () => {
    openLogin.value = false
    openRegister.value = false
  }

  return { openLogin, openRegister, open, close }
})