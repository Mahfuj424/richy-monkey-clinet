import { categoryWise } from "@/src/constant/navUser";
import React, { useState } from "react";

const AuthenticationPage = ({ category, setCategory }) => {
  console.log(category);

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="border-b-4 border-primary mx-20">
        <div className="flex w-2/6  mx-auto justify-between">
          {categoryWise?.map((categories, index) => (
            <h1
              onClick={() => setCategory(categories?.categoryName)}
              key={index}
              className={`text-2xl cursor-pointer font-semibold text-white ${
                categories?.categoryName === category &&
                "border-b-4  border-primary pb-2"
              }`}
            >
              {categories?.categoryName}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
