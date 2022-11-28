import React from "react";

const SingleCar = ({ car, setProduct }) => {
  return (
    <div className="">
      <div className=" bg-base-200 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md mt-2 dark:bg-gray-900 dark:text-gray-100">
        <div>
          <img
            src={car.img}
            alt=""
            className="object-cover w-full h-48 mb-4 rounded  dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{car.title}</h2>
          <p className="text-sm dark:text-gray-400">
            {car.description.slice(0, 100)}...
          </p>
          <div className="flex justify-between pt-1">
            <p className="text-sm font-bold dark:text-gray-400">
              Used:{car.used_year} Years
            </p>
            <div className="flex">
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
              <p className="text-sm font-bold dark:text-gray-400">
                {car.location}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center font-semibold line-through"
            >
              ${car.original_price}
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2 font-semibold"
            >
              ${car.resale_price}
            </button>
          </div>
          <div>
            <label
              onClick={() => setProduct(car)}
              htmlFor="booking-modal"
              className=" btn btn-outline bg-gradient-to-r from-secondary to-primary   text-white py-3 px-3"
            >
              Book Now {""}
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
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
