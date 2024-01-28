import { spotlightData } from "@/src/constant/home/spotlight";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SpotlightCategory = ({ selectCategory }) => {
  const categoryData = spotlightData.filter(
    (category) => category?.category === selectCategory
  );

  return (
    <div>
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div>
            {categoryData.map((spotlight, index) => (
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
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <img src={spotlight?.image} alt="" />
                  <div className="bg-[#1e1407] pb-8">
                    <h1 className="text-xl font-bold text-white text-start p-5 uppercase">
                      {spotlight?.title}
                    </h1>
                    <div className="flex gap-3 text-secondary ps-5">
                      <p className="hover:text-primary duration-200">
                        {spotlight?.rating}
                      </p>
                      <p className="hover:text-primary duration-200">
                        {spotlight?.subTitle}
                      </p>
                    </div>
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

export default SpotlightCategory;
