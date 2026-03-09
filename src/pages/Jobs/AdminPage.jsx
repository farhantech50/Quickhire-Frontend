import React, { useEffect, useState } from "react";
import { JobFilterStore } from "../../store/JobFilterStore";
import useJobs from "../../hooks/useJobs";
import { MdDelete } from "react-icons/md";
import { useTriggerRefreshStore } from "../../store/triggerRefreshStore";

const AdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setTriggerRefresh, triggerRefresh } = useTriggerRefreshStore();
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });
  const { getJobs, createJob, deleteJob } = useJobs();
  const { category, location } = JobFilterStore();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getJobs();
        if (data.success) setJobs(data?.data || []);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [category, location, triggerRefresh]);

  const handleCreateJob = async (e) => {
    e.preventDefault();
    if (
      !newJob.title ||
      !newJob.company ||
      !newJob.location ||
      !newJob.category ||
      !newJob.description
    ) {
      alert("Please fill in all fields");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to submit your application?",
    );
    if (!confirmed) return;

    const response = await createJob(newJob);
    if (response.success) {
      alert("Job created successfully!");
      setNewJob({
        title: "",
        company: "",
        location: "",
        category: "",
        description: "",
      });
      setTriggerRefresh();
    } else {
      alert("Failed to create job. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?",
    );
    if (!confirmed) return;

    const response = await deleteJob(id);
    if (response.success) {
      alert("Job deleted successfully!");
      setTriggerRefresh();
    } else {
      alert("Failed to delete job. Please try again later.");
    }
  };

  return (
    <div className="flex w-full justify-start p-4 gap-4">
      <div className="w-2/3  max-h-[85vh] overflow-auto rounded-lg bg-white border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-teal-500 text-white sticky top-0">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Company</th>
              <th className="py-2 px-4 text-left">Location</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{job.title}</td>
                <td className="py-2 px-4">{job.company}</td>
                <td className="py-2 px-4">{job.location}</td>
                <td className="py-2 px-4">{job.category}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full transition"
                    onClick={() => handleDelete(job.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/3  max-h-[85vh] overflow-auto rounded-lg shadow-lg border-l-2 border-t-2 border-teal-500 p-6">
        <h2 className="text-xl font-epilogue font-semibold text-teal-600 mb-4 text-center">
          Create Job
        </h2>
        <form onSubmit={handleCreateJob} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Title</label>
            <input
              type="text"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Company</label>
            <input
              type="text"
              value={newJob.company}
              onChange={(e) =>
                setNewJob({ ...newJob, company: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-1 text-gray-700">
              Location
            </label>
            <select
              id="location"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Location</option>
              <option value="Gulshan, Dhaka">Gulshan, Dhaka</option>
              <option value="Banani, Dhaka">Banani, Dhaka</option>
              <option value="Dhanmondi, Dhaka">Dhanmondi, Dhaka</option>
              <option value="Uttara, Dhaka">Uttara, Dhaka</option>
              <option value="Motijheel, Dhaka">Motijheel, Dhaka</option>
              <option value="Mirpur, Dhaka">Mirpur, Dhaka</option>
              <option value="Tejgaon, Dhaka">Tejgaon, Dhaka</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block mb-1 text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={newJob.category}
              onChange={(e) =>
                setNewJob({ ...newJob, category: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Category</option>
              <option value="Software Development">Software Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Design">Design</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="IT & Networking">IT & Networking</option>
              <option value="Data & Analytics">Data & Analytics</option>
              <option value="Marketing">Marketing</option>
              <option value="Content & Writing">Content & Writing</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Management">Management</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Description</label>
            <textarea
              value={newJob.description}
              onChange={(e) =>
                setNewJob({ ...newJob, description: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg w-full transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
