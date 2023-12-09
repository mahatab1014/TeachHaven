import { Swiper, SwiperSlide } from "swiper/react";

// Slider Style
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./styles.css";

// Slider required modules
import { Scrollbar, Navigation } from "swiper/modules";

import Slider_One from "/assets/banner/banner__01.jpg";
import Slider_Two from "/assets/banner/banner__02.jpg";
import Slider_Three from "/assets/banner/banner__03.jpg";

const Banner = () => {
  return (
    <section>
      <Swiper
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[85vh] items-center"
            style={{
              backgroundImage: `url(${Slider_One})`,
              // placeItems: "start",
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="">
                <h2 className="uppercase text-3xl md:text-7xl">Laptop</h2>
                <h3 className="text-xl md:text-5xl uppercase">For Sell</h3>
                <ul className="pt-5 text-base font-normal space-y-1 [&>li]:p-2 [&>li]:bg-sky-200 [&>li]:bg-opacity-20 [&>li]:rounded-md ">
                  <li>
                    <a>High Laptop Specifications</a>
                  </li>
                  <li>
                    <a>Large Storage Memory</a>
                  </li>
                  <li>
                    <a>Comfortable and Light</a>
                  </li>
                </ul>
                <div className="text-center py-2">
                  <button className="btn btn-sm bg-red-color hover:bg-red-color text-white border-none">
                    Read More
                  </button>
                </div>
              </div>
              <figure className="w-1/2">
                <img src="/assets/banner/laptop.png" alt="" />
              </figure>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[85vh]"
            style={{
              backgroundImage: `url(${Slider_Two})`,
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="text-gray-800">
                <h2 className="uppercase text-3xl md:text-7xl">iPhone</h2>
                <h3 className="text-2xl md:text-5xl uppercase">Latest Model</h3>
                <ul className="pt-5 text-base font-normal space-y-1 [&>li]:p-2 [&>li]:bg-gray-800 [&>li]:bg-opacity-20 [&>li]:rounded-md ">
                  <li>
                    <a>High Specifications</a>
                  </li>
                  <li>
                    <a>Large Storage Memory</a>
                  </li>
                  <li>
                    <a>Comfortable and Light</a>
                  </li>
                </ul>
                <div className="text-center py-2">
                  <button className="btn btn-sm bg-red-color hover:bg-red-color text-white border-none">
                    Read More
                  </button>
                </div>
              </div>
              <figure className="w-1/2">
                <img src="/assets/banner/iphone.png" alt="" />
              </figure>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[85vh]"
            style={{
              backgroundImage: `url(${Slider_Three})`,
            }}
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="">
                <h2 className="uppercase text-3xl md:text-7xl">Samsung</h2>
                <h3 className="text-2xl md:text-5xl ">S23 Ultra</h3>
                <ul className="pt-5 text-base font-normal space-y-1 [&>li]:p-2 [&>li]:bg-gray-800 [&>li]:bg-opacity-50 [&>li]:rounded-md ">
                  <li>
                    <a>High Specifications</a>
                  </li>
                  <li>
                    <a>Large Storage Memory</a>
                  </li>
                  <li>
                    <a>Comfortable and Light</a>
                  </li>
                </ul>
                <div className="text-center py-2">
                  <button className="btn btn-sm bg-red-color hover:bg-red-color text-white border-none">
                    Read More
                  </button>
                </div>
              </div>
              <figure className="w-1/2">
                <img src="/assets/banner/samsung.webp" alt="" />
              </figure>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
