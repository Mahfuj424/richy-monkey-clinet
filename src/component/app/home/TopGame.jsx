import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import ForwardIcon from "@mui/icons-material/Forward";
import { topGameData } from "@/src/constant/home/topGame";

const TopGame = () => {
  return (
    <div className="pb-20 px-5">
      <div>
        <SectionTitle
          title={"TOP GAMES"}
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
            <h1 className="pb-1 uppercase cursor-pointer border-b-4 border-primary text-xl font-semibold text-primary">
              Top rated
            </h1>
            <h1 className="text-xl uppercase cursor-pointer duration-200 hover:border-b-4 border-primary font-semibold text-primary">
              trending
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-screen-xl mx-auto mt-10">
          {topGameData.map((game, index) => (
            <div key={index} className="md:flex">
              <div>
                <img
                  className="md:h-48 w-full md:w-44"
                  src={game?.image}
                  alt="game"
                />
              </div>
              <div className="bg-[#32220c] hover:bg-yellow-900 w-full border-primary hover:border-l-8 duration-300">
                <div className="px-10">
                  <h1 className="text-5xl text-primary">0{index + 1}</h1>
                  <h1 className="text-3xl font-bold my-5 cursor-pointer uppercase text-white hover:text-primary duration-200">
                    {game?.title}
                  </h1>
                  <div className="flex gap-5 text-secondary">
                    <p className="hover:text-primary duration-200">{game?.rating} </p>
                    <p className="hover:text-primary duration-200">{game?.subTitle}</p>
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
    </div>
  );
};

export default TopGame;
