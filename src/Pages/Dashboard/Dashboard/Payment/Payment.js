import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_key);
const Payment = () => {
  const booking = useLoaderData();
  const { resale_price, product } = booking;
  return (
    <div>
      <h1 className="text-3xl mt-3">Payment for {product}</h1>
      <p className="text-xl">
        Please pay <strong>${resale_price}</strong> for your orders
      </p>
      <div className="w-96 my-12"></div>
      <div className=" ms-2 w-96 py-12 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
