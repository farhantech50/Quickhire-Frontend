import useApi from "./useApi.js";

const useApplications = () => {
  const api = useApi();

  const applyForJob = async (applicationData) => {
    try {
      const res = await api.post("/application", applicationData);
      if (res.status) {
        return {
          success: true,
          data: res.data.data,
          message: res.data.message,
        };
      } else {
        return {
          success: false,
          message: res?.message || "Something went wrong",
        };
      }
    } catch (error) {
      console.error("Internal server or network error:", error);
      return {
        success: false,
        message: "Network error. Please try again later.",
      };
    }
  };

  return { applyForJob };
};

export default useApplications;
