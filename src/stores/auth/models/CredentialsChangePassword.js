export default class CredentialsChangePassword {

    #currentPassword
    #newPassword
    #confirmationPassword
    #accessToken

    constructor(currentPassword, newPassword, confirmationPassword, accessToken) {
        this.#currentPassword = currentPassword
        this.#newPassword = newPassword
        this.#confirmationPassword = confirmationPassword
        this.#accessToken = accessToken
    }

    getCurrentPassword() {
        return this.#currentPassword
    }

    getNewPassword() {
        return this.#newPassword
    }

    getConfirmationPassword() {
        return this.#confirmationPassword
    }

    getAccessToken() {
        return this.#accessToken
    }

}