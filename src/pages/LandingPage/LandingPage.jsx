import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gradient-to-br from-[#0D9488] via-[#0D9488]/90 to-[#0D9488]/80 text-white flex flex-col justify-center items-center gap-6  px-4">
      <h1 className="text-4xl font-bold text-center">Welcome to QuickHire</h1>
      <p className="text-lg text-center">Simple Job Board Application</p>
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/jobs")}
          className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Jobs
        </button>

        <button
          onClick={() => navigate("/admin")}
          className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
