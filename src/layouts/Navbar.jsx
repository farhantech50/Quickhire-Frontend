import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser, FiBriefcase } from "react-icons/fi";
import logoTeal from "../../public/LogoTeal.png";
import { SearchFilterStore } from "../store/SearchFilterStore";

const Navbar = () => {
  const location = useLocation();
  const { searchWord, setSearchWord } = SearchFilterStore();

  return (
    <div className="w-full h-16 bg-navbar shadow-md flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logoTeal} alt="logo" className="w-10 h-10 object-contain" />
        </Link>

        <Link to="/">
          <h1 className="text-text-teal font-semibold text-2xl leading-none flex items-center">
            QUICKHIRE
          </h1>
        </Link>
      </div>

      <div className="flex-1 flex justify-center px-6">
        {location.pathname == "/jobs" && (
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        )}
      </div>

      <div className="flex items-center gap-3">
        {location.pathname !== "/jobs" && (
          <Link to="/jobs">
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              <FiBriefcase size={18} />
              <p className="font-semibold">Jobs</p>
            </button>
          </Link>
        )}
        {location.pathname !== "/admin" && (
          <Link to="/admin">
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              <FiUser size={18} />
              <p className="font-semibold">Admin</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
