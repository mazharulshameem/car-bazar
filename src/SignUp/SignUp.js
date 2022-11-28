import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../assets/images/green.webp";
import { AuthContext } from "../Contexts/AuthProvider";
import useToken from "../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("SignUp Successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
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
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://carbazar-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
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
          <h1 className="text-4xl text-center"> SIGN UP</h1>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input   input-success w-full max-w-xs"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              {errors.name && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
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
                    message: "Password must be 6 characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
              />
              <label className="label">
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
              </label>
            </div>

            <input
              className="btn btn-accent w-full"
              type="submit"
              value="SIGN UP"
            />
          </form>
          {signUpError && <p className="text-red-700">{signUpError}</p>}
          <span className="text-center ">
            Already have an account yet?{" "}
            <Link className="text-base-100 underline  text-center" to="/login">
              LOG IN
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

export default SignUp;
