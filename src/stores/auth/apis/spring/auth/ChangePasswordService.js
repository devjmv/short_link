import AuthRepository from "./AuthRepository"

export default class ChangePasswordService {

    #repo;
    #credentialsChangePassword;

    constructor(credentialsChangePassword) {
        this.#repo = new AuthRepository();
        this.#credentialsChangePassword = credentialsChangePassword;
    }

    async setNewPassword() {
        const response = await this.#repo.setNewPassword(this.#credentialsChangePassword);
        return response;
    }

}