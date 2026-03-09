import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

import useCategory from "../hooks/useCategory";
import useLocation from "../hooks/useLocation";
import { JobFilterStore } from "../store/JobFilterStore";

const Filter = () => {
  const { getCategory } = useCategory();
  const { getLocation } = useLocation();

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const { setCategory, setLocation, resetFilters } = JobFilterStore();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      const catRes = await getCategory();
      if (catRes?.success) setCategories(catRes.data || []);

      const locRes = await getLocation();
      if (locRes?.success) setLocations(locRes.data || []);
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setLocation(selectedLocation);
  }, [selectedLocation]);

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedLocation("");
    resetFilters();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-start">
      <div className="flex flex-col w-full sm:w-auto">
        <label className="mb-1 font-medium text-sm text-text-teal/80 dark:text-white">
          Category
        </label>
        <Dropdown
          options={categories}
          selectedOption={selectedCategory}
          setSelectedOption={setSelectedCategory}
        />
      </div>

      <div className="flex flex-col w-full sm:w-auto">
        <label className="mb-1 font-medium text-sm text-text-teal/80 dark:text-white">
          Location
        </label>
        <Dropdown
          options={locations}
          selectedOption={selectedLocation}
          setSelectedOption={setSelectedLocation}
        />
      </div>

      <button
        onClick={handleReset}
        className="sm:mt-6 px-2 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        <p className="text-sm font-semibold">Reset Filters</p>
      </button>
    </div>
  );
};

export default Filter;
