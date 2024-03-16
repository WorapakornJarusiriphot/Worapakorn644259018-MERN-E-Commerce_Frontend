import React from "react";
import {
  MdDashboard,
  MdBorderAll,
  MdContactSupport,
  MdLocationOn,
} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaUsers, FaShoppingCart, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import Add_Product from "../pages/Admin/Add_Product";

const Drawer = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Add_Product />
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 lg:h-30 pr-1 mx-auto"
          />
          <div className="badge badge-primary">Admin</div>
          <li>
            <a>
              <MdDashboard /> Dashboard
            </a>
          </li>
          <li>
            <a>
              <MdBorderAll /> Manage Orders
            </a>
          </li>
          <li>
            <Link to="/add-product">
              <IoIosAddCircle /> Add Product
            </Link>
          </li>

          <li>
            <a>
              <MdLocationOn /> Manage Items
            </a>
          </li>
          <li>
            <Link to="/all-users">
              <FaUsers /> All Users
            </Link>
          </li>
          <br />
          <li>
            <a>
              <MdDashboard /> Home
            </a>
          </li>
          <li>
            <a>
              <FaShoppingCart /> Products
            </a>
          </li>
          <li>
            <a>
              <FaLocationArrow /> Order Tracking
            </a>
          </li>
          <li>
            <a>
              <MdContactSupport /> Customer Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;