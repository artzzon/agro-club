import axios from "axios";

export default class QueryService {
  static async getAllProducts(category, status, searchValue) {
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

    const searchParameter = () => {
      if (searchValue) {
        return `description=*${searchValue}`;
      }
      return "";
    };

    return await axios.get(
      `https://32525a728e20df36.mokky.dev/products?${categoryParameter()}${statusParameter()}${searchParameter()}`
    );
  }

  static async getCategories() {
    return await axios.get("https://32525a728e20df36.mokky.dev/categories");
  }
}
