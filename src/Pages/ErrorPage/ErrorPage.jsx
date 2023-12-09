import { Link, useNavigate } from "react-router-dom";
import NotFound from "/assets/404.png"

const ErrorPage = () => {
  const navigate = useNavigate()
    return (
      <section className="">
        <div className="container h-[80vh] px-6 py-12 mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="mt-3 text-2xl font-semibold dark:text-gray-100 md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>
            <div className="flex items-center mt-6 gap-x-3">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center w-1/2 btn btn-neutral cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
              <Link to="/" className="w-1/2">
                <button className="btn bg-red-color text-white hover:bg-red-color normal-case">
                  Take Me Home
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full max-w-lg lg:mx-auto" src={NotFound} alt="" />
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;