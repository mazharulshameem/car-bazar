import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import SingleCar from "./../SingleCar/SingleCar";

const Categories = () => {
  const cars = useLoaderData();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {cars.map((car) => (
          <SingleCar
            key={car._id}
            car={car}
            setProduct={setProduct}
          ></SingleCar>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default Categories;
