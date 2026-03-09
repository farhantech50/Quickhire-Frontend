import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaCheck } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Dropdown({
  options = [],
  selectedOption,
  setSelectedOption,
}) {
  return (
    <Menu as="div" className="relative inline-block w-56 text-left">
      <MenuButton className="inline-flex w-full justify-between rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20">
        {selectedOption?.name || "Select Option"}
        <FiChevronDown className="ml-2 h-5 w-5 text-gray-400" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 dark:bg-gray-800 dark:shadow-none dark:outline-white/10">
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.id}>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption(option)}
                  className={`${
                    active
                      ? "bg-gray-100 text-gray-900 dark:bg-white/5 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }  w-full px-4 py-2 text-left text-sm flex justify-between items-center`}
                >
                  {option.name}
                  {selectedOption?.name === option.name && (
                    <FaCheck className="text-text-teal" />
                  )}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
