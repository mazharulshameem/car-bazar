import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl">Payment for {booking.product}</h1>
      <p className="text-xl">
        Please pay <strong>${booking.resale_price}</strong> for your orders
      </p>
      <div className="w-96 my-12"></div>
    </div>
  );
};

export default Payment;
