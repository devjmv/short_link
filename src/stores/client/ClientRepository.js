import axios from 'axios'

export default class ClientRepository {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_ENDPOINT + '/link'
  }

  async getLinks(accessToken, params = {}) {
    try {
      const headersList = {
        Accept: '*/*',
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      };

      const reqOptions = {
        url: this.baseUrl,
        method: 'GET',
        headers: headersList,
        params: params
      };

      const response = await axios.request(reqOptions);
      
      return response.data;
    } catch (error) {
      if (error.message.includes('ERR_CONNECTION_REFUSED')) {
        console.error("Connection refused error:", error);
        return {
          success: false,
          message: "Unable to connect to the server. Please try again later."
        };
      } else {
        console.error("Error fetching links:", error);
        return {
          success: false,
          message: error.response?.data?.message || "An unexpected error occurred."
        };
      }
    }
  }

  async createLink(accessToken, originUrl, shortUrl = null) {
    try {
      let headersList = {
        Accept: '*/*',
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        "originUrl": originUrl,
        "shortUrl": shortUrl,
      }

      let reqOptions = {
        url: this.baseUrl,
        method: 'POST',
        headers: headersList
      }

      const response = await axios.request(reqOptions)
      return response.data
    } catch (error) {
      return error.toJSON()
    }
  }

}
