import axios from "axios"

export default class AuthRepository {

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_ENDPOINT
    }

    async login(credentials) {
        try {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "email": credentials.getUsername(),
                "password": credentials.getPassword()
            });

            let reqOptions = {
                url: this.baseUrl + '/auth/authenticate',
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }

            const response = await axios.request(reqOptions);

            const data = await response.data

            return data;

        } catch (error) {
            return error.toJSON()
        }
    }

    async register(credentialsRegister) {
        try {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "email": credentialsRegister.email,
                "password": credentialsRegister.password
            });

            let reqOptions = {
                url: this.baseUrl + '/auth/register',
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }

            const response = await axios.request(reqOptions);
            return response.data;

        } catch (error) {
            console.log('Error during registration:', error);
            return error.toJSON();
        }
    }

    async setNewPassword(credentialsChangePassword) {
        try {
            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer " + credentialsChangePassword.getAccessToken(),
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "currentPassword": credentialsChangePassword.getCurrentPassword(),
                "newPassword": credentialsChangePassword.getNewPassword(),
                "confirmationPassword": credentialsChangePassword.getConfirmationPassword()
            });

            let reqOptions = {
                url: this.baseUrl + '/users',
                method: "PATCH",
                headers: headersList,
                data: bodyContent,
            }

            let response = await axios.request(reqOptions);
            return response.data;
        } catch (error) {
            return error.toJSON();
        }
    }
}
