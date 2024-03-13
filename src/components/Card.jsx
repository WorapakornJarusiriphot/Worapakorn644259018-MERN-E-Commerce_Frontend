import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import useCart from "../hook/useCart";

const Card = ({ item }) => {
  const { _id, name, image, price, description } = item;
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  const handleAddToCart = (item) => {
    // console.log("clicked");
    if (user && user.email) {
      // console.log("found email");
      const cartItem = {
        productId: item._id,
        name: item.name,
        email: user.email,
        price: item.price,
        image: item.image,
        quantity: 1,
      };
      console.log(cartItem);
      axios
        .post("http://localhost:5000/carts", cartItem)
        .then((response) => {
          console.log(response);
          if (response.status === 200 || response.status === 201) {
            refetch();
            Swal.fire({
              title: "Product added on the cart",
              position: "center",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          const errorMessage = error.response.data.message;
          Swal.fire({
            title: `${errorMessage}`,
            position: "center",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "Please login to add an item to your cart!",
        position: "center",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        showConfirmButton: true,
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card shadow-xl relative mr-5 md:my-5 h-120">
      <div
        className={`rating heart gap-1 absolute right-2 top-2 p-4 heartStar bg-red ${
          isHeartFilled ? "text-rose-500" : "text-white"
        } `}
        onClick={handleHeartClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 cursor-pointer"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
      <Link>
        <figure>
          <img
            src={image}
            alt=""
            className="hover:scale-105 transition-all duration-300 md:h-60"
          />
        </figure>
      </Link>
      <div className="card-body ">
        <Link>
          <h2 className="card-title">{name}</h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            {price} <span className="text-sm text-red"> ฿ </span>
          </h5>
          <button
            className="btn bg-red text-white"
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;