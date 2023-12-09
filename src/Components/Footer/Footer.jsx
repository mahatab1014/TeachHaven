import { Link } from "react-router-dom";
import Logo from "/assets/TechHaven_LOGO.png";
const Footer = () => {
  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Quick Link
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Home
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Who We Are
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Our Philosophy
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Industries
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Retail & E-Commerce
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Information Technology
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Finance & Insurance
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Services
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Translation
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Proofreading & Editing
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              Content Creation
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Contact Us
          </p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              +880 768 473 4978
            </Link>
            <Link className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">
              info@merakiui.com
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

      <div className="flex flex-col items-center justify-between sm:flex-row">
        <Link>
          <img className="w-auto h-7" src={Logo} alt="" />
        </Link>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0 ">
          © Copyright 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
