import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import Logo from "/assets/TechHaven_LOGO.png";
import LogoDark from "/assets/TechHaven_LOGO_light.png";
import { CartContext } from "../../Provider/CartProvider";

const PrimaryNav = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { cart, cartTotalPrice } = useContext(CartContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme !== "dark" ? "dark" : "light");
  };

  const activeNavStyle =
    "btn btn-sm border-none bg-red-color hover:bg-red-color text-white";
  const unActiveNavStyle = "btn btn-sm btn-ghost";

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? activeNavStyle : unActiveNavStyle
          }
        >
          Blog
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/add-product"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? activeNavStyle
                : unActiveNavStyle
            }
          >
            Add Product
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <nav className="navbar container mx-auto relative">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99999] p-2 shadow bg-base-100 rounded-box w-52 dark:shadow-red-color dark:shadow-xl"
            >
              {menuLinks}
            </ul>
          </div>
          <Link to="/">
            <figure>
              {theme === "dark" ? (
                <img
                  className="w-3/4 sm:w-2/3 md:w-1/3 mx-auto"
                  src={LogoDark}
                  alt=""
                />
              ) : (
                <img
                  className="w-3/4 sm:w-2/3 md:w-1/3 mx-auto"
                  src={Logo}
                  alt=""
                />
              )}
            </figure>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox" onClick={handleTheme} />
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart?.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[991] card card-compact dropdown-content w-52 bg-base-100 shadow dark:shadow-red-color dark:shadow-xl"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart?.length} Items</span>
                <span className="text-info">Subtotal: ${cartTotalPrice}</span>
                <div className="card-actions">
                  <Link to="/cart">
                    <button className="btn bg-red-color hover:bg-red-color text-white border-none btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52 dark:shadow-red-color dark:shadow-xl"
                >
                  <li>
                    <Link to="/dashboard/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/add-brands"
                      className="justify-between"
                    >
                      Add Brands
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/view-product"
                      className="justify-between"
                    >
                      View Products
                    </Link>
                  </li>
                  <li>
                    <button onClick={signOutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="space-x-[1px]">
                <Link to="/auth/signin">
                  <button className="btn btn-primary bg-red-color hover:bg-red-color border-none hover: text-white">
                    Sign In
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
      <div className="w-screen h-screen fixed z-20 top-0 inset-x-0 overflow-hidden pointer-events-none">
        <div className="">
          {theme === "dark" ? (
            <picture className="animate-pulse">
              <svg
                className="min-w-[80rem] mx-auto w-full -scale-y-100 contrast-150 opacity-50 dark:opacity-25"
                viewBox="0 0 1440 900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1739_2)">
                  <g filter="url(#filter0_f_1739_2)">
                    <ellipse
                      cx="987.203"
                      cy="967.25"
                      rx="581"
                      ry="356.5"
                      transform="rotate(8.47676 987.203 967.25)"
                      fill="#9641C1"
                    ></ellipse>
                  </g>
                  <g filter="url(#filter1_f_1739_2)">
                    <ellipse
                      cx="991.907"
                      cy="1000.77"
                      rx="454.5"
                      ry="280.5"
                      transform="rotate(11.69 991.907 1000.77)"
                      fill="#FF94C8"
                    ></ellipse>
                  </g>
                  <g filter="url(#filter2_f_1739_2)">
                    <ellipse
                      cx="405"
                      cy="1050"
                      rx="448"
                      ry="332"
                      fill="#007FEC"
                    ></ellipse>
                  </g>
                  <g filter="url(#filter3_f_1739_2)">
                    <ellipse
                      cx="779"
                      cy="985.5"
                      rx="259"
                      ry="204.5"
                      fill="#FFE8AE"
                    ></ellipse>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_1739_2"
                    x="110.117"
                    y="304.308"
                    width="1754.18"
                    height="1325.88"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="150"
                      result="effect1_foregroundBlur_1739_2"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter1_f_1739_2"
                    x="343.172"
                    y="510.984"
                    width="1297.47"
                    height="979.573"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1739_2"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter2_f_1739_2"
                    x="-343"
                    y="418"
                    width="1496"
                    height="1264"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="150"
                      result="effect1_foregroundBlur_1739_2"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter3_f_1739_2"
                    x="320"
                    y="581"
                    width="918"
                    height="809"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1739_2"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="clip0_1739_2">
                    <rect width="1755" height="1326" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </picture>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PrimaryNav;
