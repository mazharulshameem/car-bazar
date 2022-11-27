import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Loader from "../../../Shared/Loader/Loader";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://carbazar-server.vercel.app/productsCategory"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            email: data.email,
            image: imgData.data.url,
            title: data.title,
            description: data.description,
            category_name: data.category_name,
            original_price: data.original_price,
            resale_price: data.resale_price,
            location: data.location,
            used_year: data.used_year,
          };
          fetch("https://carbazar-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Product added successfully");
              navigate("/dashboard/myproducts");
            });
        }
      });
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-96 p-6 ">
      <h2 className="text-4xl">Add A Products</h2>
      <form onSubmit={handleSubmit(handleProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            {...register("email", {
              required: "true",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Car Name</span>
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            {...register("original_price", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.original_price && (
            <p className="text-red-500">{errors.original_price.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="text"
            {...register("resale_price", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resale_price && (
            <p className="text-red-500">{errors.resale_price.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Used Year</span>
          </label>
          <input
            type="text"
            {...register("used_year", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.used_year && (
            <p className="text-red-500">{errors.used_year.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Category</span>
          </label>
          <select
            {...register("category_name")}
            className="select input-bordered w-full max-w-xs"
          >
            {categories.map((category) => (
              <option key={category._id} value={category.category_name}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Products"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
