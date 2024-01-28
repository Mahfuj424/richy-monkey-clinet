import React from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import { topCollection } from "@/src/constant/home/topCollection";

const TopCollectionCategory = ({ selectCategory }) => {
  const collectionCategory = topCollection.filter(
    (category) => category?.category === selectCategory
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-screen-xl mx-auto mt-10">
        {collectionCategory.slice(0,6).map((collection, index) => (
          <div key={index} className="md:flex">
            <div>
              <img
                className="md:h-48 w-full md:w-44"
                src={collection?.image}
                alt="collectionImage"
              />
            </div>
            <div className="bg-[#32220c] hover:bg-yellow-900 w-full border-primary hover:border-l-8 duration-300">
              <div className="px-10">
                <h1 className="text-5xl text-primary">0{index + 1}</h1>
                <h1 className="text-3xl font-bold my-5 cursor-pointer uppercase text-white hover:text-primary duration-200">
                  {collection?.title}
                </h1>
                <div className="flex gap-5 text-secondary">
                  <p className="hover:text-primary duration-200">
                    {collection?.rating}{" "}
                  </p>
                  <p className="hover:text-primary duration-200">
                    {collection?.subTitle}
                  </p>
                </div>
              </div>
              <div className="text-end">
                <button className="button">
                  <ForwardIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollectionCategory;
