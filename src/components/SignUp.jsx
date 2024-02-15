import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import Modal from "./Modal";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Account created Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      {/*<div className="section-container flex items-center justify-center my-40"> */}
      <div className="modal-action mt-0 flex flex-col justify-center">
        <h3 className="font-bold text-lg">Create An Account</h3>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-red text-white"
            />
          </div>
          <p className="text-center my-2">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("login").showModal()}
              className="underline text-red ml-1"
            >
              Login
            </button>
          </p>
        </form>
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-ghost btn-circle  hover:bg-red hover:text-white">
            <FaFacebook />
          </button>
          <button className="btn btn-ghost btn-circle  hover:bg-red hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal name={"login"} />
    </div>
  );
};

export default SignUp;