import useApi from "./useApi.js";

const useCategory = () => {
  const api = useApi();

  const getCategory = async () => {
    try {
      const res = await api.get("/filter/category");
      if (res.status) {
        return {
          success: true,
          data: res.data,
        };
      } else {
        return {
          success: false,
        };
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      return { success: false, message: "Network error" };
    }
  };

  return { getCategory };
};

export default useCategory;
