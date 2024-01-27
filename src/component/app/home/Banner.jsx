import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { bannerImage } from "@/src/constant/home/banner";

const Banner = () => {
  return (
    <div className="container mx-auto pt-[72px] md:pt-0">
      <div>
        <Swiper
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 5000, duration: 2000 }}
          className="mySwiper"
        >
          {bannerImage.map((banner, index) => (
            <SwiperSlide key={index} className="h-screen md:h-auto">
              <div className="card card-compact bg-base-100 shadow-xl rounded-none pb-5">
                <div className="relative flex justify-center items-center">
                  <img className="md:h-screen h-2/4 w-screen"
                    src={banner?.image1}
                    alt="banner"
                  />
                  <div className="absolute bottom-5">
                    <img
                      src={banner?.image2}
                      alt="banner"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* ))} */}
        </Swiper>
        <style jsx>{`
          .custom-next-button,
          .custom-prev-button {
            color: #ff9800; /* Set the desired color */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Banner;
