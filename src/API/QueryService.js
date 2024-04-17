import axios from "axios";

export default class QueryService {
  static async getAllProducts(category) {
    const queryParameter = () => {
      if (category !== "all") {
        return `?categoryType=${category}`;
      }
      return "";
    };

    return await axios.get(
      `https://32525a728e20df36.mokky.dev/products${queryParameter()}`
    );
  }

  static async getCategories() {
    return await axios.get("https://32525a728e20df36.mokky.dev/categories");
  }
}
