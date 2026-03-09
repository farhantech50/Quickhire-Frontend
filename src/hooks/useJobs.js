import useApi from "./useApi.js";
import { JobFilterStore } from "../store/JobFilterStore.js";
import { SearchFilterStore } from "../store/SearchFilterStore.js";

const useJobs = () => {
  const api = useApi();
  const { category, location } = JobFilterStore();
  const { searchWord } = SearchFilterStore();

  const getJobs = async () => {
    try {
      const res = await api.get("/jobs", {
        params: {
          category: category?.name,
          location: location?.name,
          search: searchWord || undefined,
        },
      });
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

  const getJob = async (jobId) => {
    try {
      const res = await api.get(`/job/${jobId}`);
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
  const createJob = async (jobData) => {
    try {
      const res = await api.post("/job", jobData);
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
  const deleteJob = async (jobId) => {
    try {
      const res = await api.delete(`/job/${jobId}`);
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
  return { getJobs, getJob, createJob, deleteJob };
};

export default useJobs;
