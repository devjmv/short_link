import { defineStore } from 'pinia'
import { ref } from 'vue'

export const modeStorage = defineStore('mode', () => {

    const mode = ref('dark')

    if (localStorage.getItem("mode")) {
        mode.value = localStorage.getItem("mode")
    }

    const change = () => {
        if (mode.value === 'dark') {
            mode.value = 'light'
            localStorage.setItem('mode', "light")
        } else {
            mode.value = 'dark'
            localStorage.setItem('mode', "dark")
        }
    }

    return { mode, change }
})