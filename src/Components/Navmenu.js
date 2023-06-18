import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
const Navmenu = () => {
  return (
    <div className="bg-[#1D1F25] text-white p-5">
      <h1 className="text-4xl font-bold text-left my-10 mx-10">
        We tackle intresting topics every day
      </h1>
      <div className="flex justify-between my-4 mx-7">
        <label
          className="bg-[#282C38] text-[#757B8C] rounded-md flex items-center h-11 w-fit mx-3 gap-4 justify-evenly p-3"
          for="search-bar"
        >
          <FiSearch />
          <input
            className="bg-[#282C38] outline-none"
            placeholder="Find Courses"
            id="search-bar"
          />
        </label>
        <div className="flex gap-3 mx-4">
          <span className="navmenu-btn">
          <CiGrid2H />
          </span>
          <span className="navmenu-btn bg-yellow-500 text-black">
            <BsFillGrid1X2Fill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
