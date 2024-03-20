import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ProductList from "../pages/shop/ProductList";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Cart from "../pages/shop/Cart";
import DashboardLayout from "../layout/DashboardLayout";
import User from "../pages/dashboard/admin/User";
import Dashboard from "../pages/dashboard/admin/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRouter>
            <ProductList />
          </PrivateRouter>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "users", element: <User /> },
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;