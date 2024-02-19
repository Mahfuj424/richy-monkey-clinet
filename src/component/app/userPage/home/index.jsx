import { categoryWise } from "@/src/constant/navUser";
import { TextField } from "@mui/material";
import React from "react";
import User from "../User";

const AllTab = ({ category, setCategory }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="border-b-4 border-primary mx-20">
        <div className="flex w-2/6  mx-auto justify-between">
          {categoryWise?.map((categories, index) => (
            <h1
              onClick={() => setCategory(categories?.categoryName)}
              key={index}
              className={`text-2xl cursor-pointer font-semibold hover:border-b-4 border-primary text-white ${
                categories?.categoryName === category &&
                "border-b-4  border-primary pb-2"
              }`}
            >
              {categories?.categoryName}
            </h1>
          ))}
        </div>
      </div>
      {category === "Search" && (
        <div className="mt-10 w-3/4 mx-auto">
          <input
            className="w-full py-3 px-5 bg-black/30 border rounded-md border-primary text-white"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
      )}
      {/* this is user page */}
      {category === "User" && <User />}
    </div>
  );
};

export default AllTab;
