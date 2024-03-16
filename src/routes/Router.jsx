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
import Admin from "../layout/Admin";
import Add_Product from "../pages/Admin/Add_Product";
import All_Users from "../pages/Admin/All_Users";
import Admin_All_Users from "../layout/Admin_All_Users";

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
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/add-product",
        element: <Add_Product />,
      },
    ],
  }, 
  {
    path: "/",
    element: <Admin_All_Users />,
    children: [
      {
        path: "/all-users",
        element: <All_Users />,
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
  // {
  //   path: "/admin_panel",
  //   element: <Drawer />,
  // },
]);

export default router;