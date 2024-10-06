import ClientRepository from "./ClientRepository"

export default class ClientService {
  #repo

  constructor() {
    this.#repo = new ClientRepository()
  }

  async getLinks(accessToken, params) {
    const response = await this.#repo.getLinks(accessToken, params)
    return response
  }

  async createLink(accessToken, originUrl, shortUrl) {
    const response = await this.#repo.createLink(accessToken, originUrl, shortUrl)
    return response
  }
}
