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
              <div className="pt-16 flex justify-around items-center">
                <div className="">
                  <img src={banner?.image} alt="" />
                </div>
                <div>
                  <h1>{banner?.title}</h1>
                  <p className="my-5">{banner?.description}</p>
                  <button className="button">Buy now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;