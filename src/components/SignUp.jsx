import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import useAxiosPublic from "../hook/useAxiosPublic";
import Modal from "./Modal";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile, sigUpWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();

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

        updateUserProfile(data.name, data.photoURL).then(() => {
          //console.log("Form", data.name, data.photoURL);
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((response) => {
            //console.log(response);
            //console.log(user);
            Swal.fire({
              title: "Account created Successfully",
              icon: "success",
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
        });
        // alert("Account created Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignUp = () => {
    sigUpWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photoURL: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((response) => {
          //console.log(response);
          //console.log(user);
          Swal.fire({
            title: "Google Sign Up Successfully",
            icon: "success",
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
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
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </div>
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
            Hava an account?{" "}
            <button
              onClick={() => document.getElementById("login").showModal()}
              className="underline text-red ml-1"
            >
              Login
            </button>
          </p>
        </form>
        <div className="text-center space-x-3 mb-5">
          <button
            className="btn btn-ghost btn-circle hover:bg-red hover:text-white"
            onClick={googleSignUp}
          >
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