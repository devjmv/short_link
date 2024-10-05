import AuthRepository from "./AuthRepository"

export default class RegisterService {

    #repo;
    #credentials;

    constructor(credentials) {
        this.#repo = new AuthRepository();
        this.#credentials = credentials;
    }

    async register() {
        const response = await this.#repo.register(this.#credentials);
        return response;
    }

}