import React from "react";
import { Link } from "react-router-dom";

const SingleCar = ({ car }) => {
  return (
    <div className="">
      <div className=" bg-red-300 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md mt-2 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {/* {course.instructor} */}
            </a>
            <div className="flex">
              {/* <FaStar className=""></FaStar> */}
              {""}
              <span className="text-xs dark:text-gray-600">
                {/* {course.rating} */}
              </span>
            </div>
          </div>
        </div>
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
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              ${car.original_price}
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              ${car.resale_price}
            </button>
          </div>
          <div>
            <Link
              // to={`/home/course/${course.id}`}
              className="block  bg-teal-500 hover:bg-purple-600  shadow-lg text-white py-2 px-3"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
