import { NavLink } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineForm,
} from "react-icons/ai";

const DashboardNav = () => {
  const menuLinks = (
    <>
      <li>
        <NavLink to="/dashboard/profile">
          <AiOutlineHome className="text-xl" />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/add-brands">
          <AiOutlineForm className="text-xl" />
          Add Brands
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/view-product">
          <AiOutlineFolderOpen className="text-xl" />
          View Products
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer block lg:hidden ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-right">
          <label
            htmlFor="my-drawer"
            className="btn bg-red-color hover:bg-red-color text-white border-none drawer-button "
          >
            Dashboard
          </label>
        </div>
        <div className="drawer-side z-[9999]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {menuLinks}
          </ul>
        </div>
      </div>
      <ul className="hidden lg:block menu bg-base-200 w-56 rounded-box sticky top-20">
        {menuLinks}
      </ul>
    </>
  );
};

export default DashboardNav;
