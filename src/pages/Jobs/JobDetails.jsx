import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useJobs from "../../hooks/useJobs";
import useApplications from "../../hooks/useApplications";
import { useNavigate } from "react-router-dom";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { getJob } = useJobs();
  const { applyForJob } = useApplications();
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    resumeUrl: "",
    coverNote: "",
  });
  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await getJob(id);
        setJob(data?.data || null);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleApply = async (e) => {
    e.preventDefault();
    if (
      !applicationData.fullName ||
      !applicationData.email ||
      !applicationData.resumeUrl ||
      !applicationData.coverNote
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to submit your application?",
    );
    if (!confirmed) return;

    const applicationPayload = {
      jobId: id,
      ...applicationData,
    };

    const response = await applyForJob(applicationPayload);
    if (response.success) {
      alert("Application submitted successfully!");
      setApplicationData({
        fullName: "",
        email: "",
        resumeUrl: "",
        coverNote: "",
      });
      navigate("/jobs");
    } else {
      alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-teal-500 ">
          <h1 className="text-2xl font-epilogue font-semibold text-teal-600 mb-4">
            {job?.title}
          </h1>
          <p className="mt-2 text-gray-700">
            <strong>Company:</strong> {job?.company}
          </p>
          <p className="mt-1 text-gray-700">
            <strong>Location:</strong> {job?.location}
          </p>
          <p className="mt-1 text-gray-700">
            <strong>Category:</strong> {job?.category}
          </p>
          <p className="mt-4 text-gray-700">
            <strong>Description:</strong> <br />
            {job?.description}
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-teal-500">
          <form onSubmit={handleApply}>
            <h2 className="text-xl font-epilogue text-center font-semibold text-teal-600 mb-4">
              Apply for this job
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={applicationData.fullName}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    fullName: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                required
                type="email"
                value={applicationData.email}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    email: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Resume URL</label>
              <input
                type="url"
                required
                value={applicationData.resumeUrl}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    resumeUrl: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Cover Note</label>
              <input
                type="text"
                required
                value={applicationData.coverNote}
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    coverNote: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
