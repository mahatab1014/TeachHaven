import { Link } from "react-router-dom";
import ProductsGrid from "../../Components/ProductsGrid/ProductsGrid";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Brands />
      <section className="bg-slate-100 dark:bg-base-200">
        <div className="container mx-auto px-5 py-10">
          <div className="sections-title text-center py-10 md:max-w-3xl m-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Flash <span className="text-red-color">Sale</span>
            </h2>
            <p className="text-xl font-medium text-gray-500">
              Discover the newest arrivals in the world of electronics. Our
              Latest Devices section features cutting-edge products that embrace
              the latest technology trends. Stay ahead of the curve and explore
              innovative smartphones, laptops, and more. It's where technology
              and style meet the future. Don't miss out on what's next.
            </p>
          </div>
          <ProductsGrid />

          <div className="text-center py-10">
            <Link to="/shop">
              <button className="btn btn-wide bg-red-color hover:bg-red-color border-none text-white">
                View ALL
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <picture>
            <img
              className="h-96 w-auto rounded-2xl"
              src="https://images.unsplash.com/photo-1601972602237-8c79241e468b"
              alt=""
            />
          </picture>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Try something really different right now.
          </h2>

          <p className="text-lg font-medium text-gray-500 max-w-4xl mt-4">
            Elevate your shopping experience with our dedicated app. Enjoy
            convenience at your fingertips – shop, browse, and stay updated
            effortlessly. Get exclusive deals, real-time notifications, and a
            seamless, on-the-go connection with us. Download the app now and
            stay plugged into all things tech!
          </p>

          <div className="mt-6">
            <Link className="inline-flex active:scale-95 transition-all items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2">
              <svg
                className="w-5 h-5 mx-2 fill-current"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                  </g>
                </g>
              </svg>

              <span className="mx-2">Get it on the App Store</span>
            </Link>

            <Link className="inline-flex active:scale-95 transition-all items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white  duration-300 bg-red-color rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
              <svg
                className="w-5 h-5 mx-2 fill-current"
                viewBox="-28 0 512 512.00075"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s-16.214844-2.132812-23.601563-6.398438l361.519531-208.722656c-14.777343-8.53125-23.601562-23.8125-23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
              </svg>

              <span className="mx-2">Get it on Google Play</span>
            </Link>
          </div>
        </div>
      </section>
      <Testimonial />
      <section>
        <div className="container mx-auto px-5 py-10">
          <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div className="relative">
              <div className="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                  <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Interactive
                  </p>
                  <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Haven Support Hub
                  </h4>
                  <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    Welcome to the 'Haven Support Hub,' your tech sanctuary that
                    never sleeps. At Tech Haven, we understand that questions
                    and issues can arise at any hour. That's why our 24/7
                    support team is always ready to assist you. Feel secure in
                    the knowledge that help is just a click or call away, day or
                    night. We're here to keep your tech experience hassle-free
                    and enjoyable.
                  </p>
                  <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                          24/7 Availability
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                          Expert Guidance
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                          Swift Response
                        </span>
                      </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                          Customer-Centric
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                  <div className="relative space-y-4">
                    <div className="flex items-end justify-center space-x-4 lg:justify-start">
                      <img
                        className="w-32 rounded-lg shadow-lg md:w-56"
                        width="200"
                        src="https://www.tailwind-kit.com/images/object/8.jpg"
                        alt="1"
                      />
                      <img
                        className="w-40 rounded-lg shadow-lg md:w-64"
                        width="260"
                        src="https://www.tailwind-kit.com/images/landscape/4.jpg"
                        alt="2"
                      />
                    </div>
                    <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                      <img
                        className="w-24 rounded-lg shadow-lg md:w-40"
                        width="170"
                        src="https://www.tailwind-kit.com/images/landscape/3.jpg"
                        alt="3"
                      />
                      <img
                        className="w-32 rounded-lg shadow-lg md:w-56"
                        width="200"
                        src="https://www.tailwind-kit.com/images/object/9.jpg"
                        alt="4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
