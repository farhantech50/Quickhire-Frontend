import React, { useEffect, useState } from "react";
import useJobs from "../../hooks/useJobs";
import { FiBriefcase } from "react-icons/fi";
import Filter from "../../components/Filter";
import { JobFilterStore } from "../../store/JobFilterStore";
import { SearchFilterStore } from "../../store/SearchFilterStore";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getJobs } = useJobs();
  const navigate = useNavigate();
  const { category, location } = JobFilterStore();
  const { searchWord } = SearchFilterStore();

  const handleViewDetails = (job) => {
    navigate(`/jobs/${job.id}`);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getJobs();
        setJobs(data?.data || []);
      } catch (err) {
        setError("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [category, location, searchWord]);

  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="font-epilogue font-extrabold text-text-teal/70 text-2xl sm:text-3xl md:text-4xl leading-snug">
          Job Opportunities
        </h1>
        <Filter />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="font-epilogue border rounded-xl p-5 hover:shadow-2xl transition bg-white text-gray-800 flex flex-col"
          >
            <div className="flex items-center mb-3">
              <div className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                <FiBriefcase size={20} />
              </div>
              <h2 className="font-semibold text-lg sm:text-xl md:text-lg lg:text-xl">
                {job.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-600">{job.company}</p>

            <p className="text-sm sm:text-base mt-2">{job.location}</p>

            <div className="mt-auto flex justify-end w-full">
              <button
                className="bg-teal-600 text-white font-epilogue font-semibold px-2 py-1 text-sm rounded-lg hover:bg-teal-700 transition-colors"
                onClick={() => handleViewDetails(job)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
