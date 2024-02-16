import React, { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import TopCollectionCategory from "./TopCollectionCategory";

const TopCollection = () => {

  const [selectCategory, setSelectCategory]= useState('top rated')

  const categories = [
    {
      name: "top rated",
    },
    {
      name: "trending",
    },
  ];

  return (
    <div className="pb-20 px-5">
      <div>
        <SectionTitle
          title={"TOP collection"}
          icon={
            <FilterTiltShiftIcon
              className="text-primary"
              sx={{ fontSize: "50px" }}
            />
          }
        ></SectionTitle>
      </div>
      <div>
        <div className="border-b-4 border-primary max-w-screen-xl mx-auto">
          <div className="flex gap-10 mb-2">
            {categories.map((category, index) => (
              <div
                onClick={() => setSelectCategory(category?.name)}
                key={index}
                className={`${
                  category?.name === selectCategory
                    ? "border-b-4 border-primary"
                    : ""
                } pb-1 uppercase text-xl font-semibold cursor-pointer text-primary`}
              >
                {category?.name}
              </div>
            ))}
          </div>
        </div>
        <TopCollectionCategory selectCategory={selectCategory}/>
      </div>
    </div>
  );
};

export default TopCollection;
