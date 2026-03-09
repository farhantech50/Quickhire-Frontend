import useApi from "./useApi.js";

const useLocation = () => {
  const api = useApi();

  const getLocation = async () => {
    try {
      const res = await api.get("/filter/location");
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
      console.error("Error fetching locations:", error);
      return { success: false, message: "Network error" };
    }
  };

  return { getLocation };
};

export default useLocation;
