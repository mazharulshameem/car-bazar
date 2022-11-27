import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
import Loader from "../../Shared/Loader/Loader";

const MyProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const closeModal = () => {
    setDeleteProduct(null);
  };
  const handlerDeleteProduct = (product) => {
    console.log(product);
  };
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h1 className="text-2xl">My Products {products?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Price</th>
              <th>Category</th>
              <th>Details</th>
              <th>Used</th>
              <th>Location</th>
              <th>Added</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className=" w-32 ">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold line-through">
                        ${product.original_price}
                      </div>
                      <div className="text-sm ">${product.resale_price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.category_name}
                  <br />
                  <span className="badge">{product.title}</span>
                </td>
                <td>{product.description}</td>
                <td>{product.used_year} Years</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {product.location}
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost">Added</button>
                </th>
                <th>
                  <button
                    onClick={() => setDeleteProduct(product)}
                    className=""
                  >
                    <label
                      htmlFor="conformation-modal"
                      className="btn btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </label>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <ConformationModal>
          successAction ={handlerDeleteProduct}
          modalData={deleteProduct}
          closeModal={closeModal}
        </ConformationModal>
      )}
    </div>
  );
};

export default MyProducts;
