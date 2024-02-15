import React, { useContext } from "react";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthProvider";

const NavBar = () => {
    const { user, setUser, createUser } = useContext(AuthContext);
    console.log(user);
    const navItems = (
        <>
            <li>
                <a>Home</a>
            </li>
            <li tabIndex={0}>
                <details>
                    <summary>Category</summary>
                    <ul className="p-2">
                        <li>
                            <a>All</a>
                        </li>
                        <li>
                            <a>Clothing</a>
                        </li>
                        <li>
                            <a>Accessories</a>
                        </li>
                        <li>
                            <a>Gadgets</a>
                        </li>
                        <li>
                            <a>Swag</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li tabIndex={0}>
                <details>
                    <summary>Services</summary>
                    <ul className="p-2">
                        <li>
                            <a>Order online</a>
                        </li>
                        <li>
                            <a>Order Tracking</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <a>Promotion</a>
            </li>
        </>
    );
    return (
        <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
            <div className="navbar xl:px-24">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
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
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-md lg:text-xl " href="/">
                            <img
                                src="/logo.png"
                                alt=""
                                className="h-6 lg:h-12 pr-1 mx-auto"
                            />
                            <span className="text-red">SE Souvenir Shop</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navItems}</ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle hidden lg:flex mr-3 items-center justify-center">
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle hidden sm:flex mr-3 items-center justify-center"
                        >
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
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <button
                            className="btn bg-red rounded-full px-5 text-white flex items-center gap-2"
                            onClick={() => document.getElementById("login").showModal()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Login
                        </button>
                    </div>
                    <Modal name="login" />
                </div>
            </div>
        </header>
    );
};

export default NavBar;