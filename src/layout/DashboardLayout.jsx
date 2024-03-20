import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegUser, FaUserEdit } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = true;
  return (
    <div>
      {isAdmin ? (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center my-2">
            {/* Page content here */}
            <div className="flex items-center justify-between mx-4">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                <MdDashboard />
              </label>

              <button className="btn btn-error sm:hidden flex items-center gap-2">
                <FaRegUser /> Log out
              </button>
            </div>
            <div className="mt-5 md:mt-2 mx-4">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link to="/dashboard" className="flex justify-start mb-3">
                  <img src={logo} className="w-20" />
                  <div className="badge badge-primary">Admin</div>
                </Link>
              </li>
              <hr />
              <li>
                <Link>
                  <MdDashboard /> Dashboard
                </Link>
              </li>
              <li>
                <Link>
                  <IoBagCheck />
                  Manage Orders
                </Link>
              </li>
              <li>
                <Link>
                  <IoIosAddCircle />
                  Add Product
                </Link>
              </li>
              <li>
                <Link>
                  <MdOutlineDashboardCustomize />
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUserEdit />
                  All users
                </Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <Link
            to="/"
            className="btn btn-sx btn-error sm:btn-sm md:btn-md lg:btn-lg"
          >
            You are not an admin! Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;