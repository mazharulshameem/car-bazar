import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleCar from "./../SingleCar/SingleCar";

const Categories = () => {
  const cars = useLoaderData();
  const [products, setProducts] = useState(null);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {cars.map((car) => (
          <SingleCar
            key={car._id}
            car={car}
            setProducts={setProducts}
          ></SingleCar>
        ))}
      </div>
      {products && <BookingModal products={products}></BookingModal>}
    </div>
  );
};

export default Categories;
