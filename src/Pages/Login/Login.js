import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../assets/images/green.webp";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="mt-1"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-[600px] flex justify-center items-center ">
        <div className="w-96  p-7 border rounded-lg border-x-cyan-900 border-y-slate-700 ">
          <h1 className="text-4xl text-center"> LOG IN</h1>
          <form onSubmit={handleSubmit(handleLogIn)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input   input-success w-full max-w-xs"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input  input-success w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
                <span className="label-text ">Forgot Password ?</span>
              </label>
            </div>
            <div>
              {loginError && <p className="text-red-700">{loginError}</p>}
            </div>
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Log in"
            />
          </form>
          <span className="text-center ">
            New to Car Bazar{" "}
            <Link className="text-purple-600 text-center" to="/signup">
              Create New Account
            </Link>
          </span>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full "
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
