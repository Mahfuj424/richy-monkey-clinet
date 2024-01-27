import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import { latestNewsData } from "@/src/constant/home/LatestNews";
import LatestVideo from "./LatestVideo";

const LatestNews = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-20 px-5 md:px-0">
      <div>
        <SectionTitle
          title={"latest news"}
          icon={
            <FilterTiltShiftIcon
              className="text-primary"
              sx={{ fontSize: "50px" }}
            />
          }
        ></SectionTitle>
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-[65%] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {latestNewsData.map((news, index) => (
              <div
                className="hover:scale-105 duration-300 hover:shadow-md hover:border-b-4 border-primary hover:border-e-4 hover:border-l-4 rounded-md"
                key={index}
              >
                <div>
                  <img src={news?.image} alt="game" />
                </div>
                <div className="px-3 pb-2">
                  <div className="flex gap-3 mt-2 text-secondary">
                    {news?.publish.map((social, index) => (
                      <div key={index} className="flex gap-1">
                        {social?.icon}
                        <h1 className="uppercase">{social?.title}</h1>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1 className="text-xl font-bold my-3 text-white hover:text-primary duration-200">
                      {news?.title}
                    </h1>
                    <p className="text-yellow-900">{news?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[28%] w-full md:mt-0 mt-10">
          <LatestVideo />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
