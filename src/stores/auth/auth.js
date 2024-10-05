import { ref } from "vue";
import { defineStore } from "pinia";
import Credentials from "./models/Credentials";
import AuthService from "./apis/spring/auth/AuthService";
import RegisterService from "./apis/spring/auth/RegisterService";
import ChangePasswordService from "./apis/spring/auth/ChangePasswordService";
import CredentialsChangePassword from "./models/CredentialsChangePassword";


export const useAuthStore = defineStore('auth', () => {

    const user = ref(
        {
            id: '',
            email: '',
            role: '',
            isAuthenticated: false,
            access_token: '',
            refresh_token: '',
            lang: 'en'
        }
    )

    function login(username, password) {

        const credentials = new Credentials(username, password)
        const service = new AuthService(credentials)
        return service.login()

    }


    function register(email, password) {

        const credentialsRegister = { email, password };
        const service = new RegisterService(credentialsRegister);
        return service.register();

    }

    function setNewPassword(currentPassword, newPassword, confirmationPassword, accessToken) {
        const credentialsChangePassword = new CredentialsChangePassword(currentPassword,  newPassword, confirmationPassword, accessToken)
        const service = new ChangePasswordService(credentialsChangePassword)
        return service.setNewPassword();

    }

    return { user, login, register, setNewPassword };
});