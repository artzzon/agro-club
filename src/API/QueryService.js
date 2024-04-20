import axios from "axios";

export default class QueryService {
  static async getAllProducts(category, status) {
    const categoryParameter = () => {
      if (category !== "all") {
        return `categoryType=${category}`;
      }
      return "";
    };

    const statusParameter = () => {
      if (status.isLimited && status.isNew) {
        return `isLimited=${status.isLimited}&isNew=${status.isNew}`;
      } else if (status.isLimited) {
        return `isLimited=${status.isLimited}`;
      } else if (status.isNew) {
        return `isNew=${status.isNew}`;
      }
      return "";
    };

    return await axios.get(
      `https://32525a728e20df36.mokky.dev/products?${categoryParameter()}&${statusParameter()}`
    );
  }

  static async getCategories() {
    return await axios.get("https://32525a728e20df36.mokky.dev/categories");
  }
}
