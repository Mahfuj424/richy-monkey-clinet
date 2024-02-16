import React, { useState } from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SectionTitle from "../../SectionTitle/SectionTitle";

import SpotlightCategory from "./SpotlightCategory";

const SpotLight = () => {
  const [selectCategory, setSelectCategory] = useState("latest");
  const categories = [
    {
      name: "latest",
    },
    {
      name: "popular",
    },
  ];

  return (
    <div className="px-5">
      <div>
        <SectionTitle
          title={"spotlight this month"}
          icon={
            <AutoFixHighIcon
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

        <SpotlightCategory selectCategory={selectCategory}/>
      </div>
    </div>
  );
};

export default SpotLight;
