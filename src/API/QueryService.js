import axios from "axios";

export default class QueryService {
  static async getAllProducts() {
    return await axios.get("https://32525a728e20df36.mokky.dev/products");
  }

  static async getCategories() {
    return await axios.get("https://32525a728e20df36.mokky.dev/categories");
  }
}
