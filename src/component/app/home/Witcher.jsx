import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  witcherDescription,
  witcherImage,
  witcherTitle,
} from "@/src/constant/home/witcher";

const Witcher = () => {
  return (
    <div className="py-24">
      <div
        className="md:w-[1515px]  w-full relative flex justify-center items-center"
        style={{
          height: "562px",
          backgroundPosition: "left center",
          background:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://demo.themexpert.com/wordpress/gamez/game-review/wp-content/uploads/sites/3/2016/10/cover.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="absolute md:top-20 gap-14 md:flex md:text-start text-center justify-center">
          <div>
            <img className="mx-auto" src={witcherImage} alt="" />
          </div>
          <div className="mt-10 md:mt-0">
            <div>
              <h1 className="text-3xl font-bold uppercase text-white">
                {witcherTitle}
              </h1>
              <p className="text-white text-lg md:w-[45%] w-full  pt-4">
                {witcherDescription}
              </p>
              <div className="mt-5">
                <button className="button">
                  <ShoppingCartIcon /> add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Witcher;
