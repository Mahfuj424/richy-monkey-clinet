import React from "react";

import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { topSellingData } from "@/src/constant/home/TopSelling";

const TopSelling = () => {
  return (
    <div className="pb-20 max-w-screen-xl mx-auto px-5">
      <div>
        <SectionTitle
          title={"TOP Selling"}
          icon={
            <FilterTiltShiftIcon
              className="text-primary"
              sx={{ fontSize: "50px" }}
            />
          }
        ></SectionTitle>
      </div>
      <div className="mt-10">
        <Swiper
          style={{ height: "100%", width: "100%" }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div>
            {topSellingData.map((product, index) => (
              <SwiperSlide
                key={index}
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "block",
                    width:"100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <img className="w-full" src={product?.image} alt="" />
                  <button className="button w-full">Add to cart</button>
                  <div className="bg-[#32220c] pb-8">
                    <h1 className="text-xl font-bold text-white text-start p-5 uppercase">
                      {product?.title}
                    </h1>
                    <h1 className="text-white text-start ps-5">${product?.amount}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TopSelling;
