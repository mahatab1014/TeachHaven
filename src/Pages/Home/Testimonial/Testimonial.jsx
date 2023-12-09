// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto px-5 py-10">
        <div className="sections-title text-center py-10 md:max-w-3xl m-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-semibold">
            What our client says
          </h2>
          <p className="text-xl font-medium text-gray-500">
            Discover the voices of satisfaction and trust in our 'What Our
            Clients Say' section. Hear firsthand from our valued customers who
            have experienced our exceptional products and service. Their
            feedback reflects our commitment to quality and excellence. We're
            proud to share their stories and look forward to adding yours soon.
          </p>
        </div>

        <Swiper
          grabCursor={true}
          effect={"creative"}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper md:max-w-2xl"
        >
          <SwiperSlide>
            <div className="flex flex-col max-w-xl mx-4 my-6 shadow-lg bg-gray-900">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                <p className="relative px-6 py-1 text-base sm:text-lg italic text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I couldn't be happier with my purchase from this store. The
                  quality of the products and the exceptional service truly
                  exceeded my expectations. Highly recommended!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-700">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
                />
                <p className="text-xl font-semibold leadi">Jane D.</p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col max-w-xl mx-4 my-6 shadow-lg bg-gray-900">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                <p className="relative px-6 py-1  text-base sm:text-lg italic text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  This shop is a gem! Their team went above and beyond to help
                  me find the perfect laptop. I'm thrilled with my purchase and
                  will definitely be back for more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-700">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?3"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
                />
                <p className="text-xl font-semibold leadi">John S.</p>
                <p className="text-sm uppercase">Designer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col max-w-xl mx-4 my-6 shadow-lg bg-gray-900">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                <p className="relative px-6 py-1  text-base sm:text-lg italic text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I love this place! The app is so convenient, and the staff is
                  knowledgeable and friendly. My new smartphone is amazing, and
                  I got it at a great price. A must-visit for tech enthusiasts!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-700">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?2"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
                />
                <p className="text-xl font-semibold leadi"> Emily W.</p>
                <p className="text-sm uppercase">Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col max-w-xl mx-4 my-6 shadow-lg bg-gray-900">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                <p className="relative px-6 py-1  text-base sm:text-lg italic text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Outstanding selection of electronics and top-notch customer
                  service. I was impressed by the fast delivery and the quality
                  of my new gadgets. I'm a satisfied customer and will be back
                  for future tech needs!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gray-700">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?9"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
                />
                <p className="text-xl font-semibold leadi">Michael R.</p>
                <p className="text-sm uppercase">Rider</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
