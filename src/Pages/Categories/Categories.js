import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleCar from "./../SingleCar/SingleCar";

const Categories = () => {
  const cars = useLoaderData();

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {cars.map((car) => (
          <SingleCar key={car._id} car={car}></SingleCar>
        ))}
      </div>
      <BookingModal></BookingModal>
    </div>
  );
};

export default Categories;
