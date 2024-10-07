import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import router from "@/router";

export const logoutStore = defineStore('logout', () => {

    const store = useAuthStore()
    function logout() {

        store.user.isAuthenticated = false
        store.user.role = ""
        store.user.access_token = ""
        store.user.refresh_token = ""

        localStorage.setItem('isAuthenticated', "")
        localStorage.setItem('role', "")
        localStorage.setItem('access_token', "")
        localStorage.setItem('refresh_token', "")

        const redirectPath = '/shorten'
        router.push(redirectPath)
    }

    return { logout };
});
