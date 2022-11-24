import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import img from "../../../assets/images/car-glass.webp";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" /> */}
          <a href="#">
            <img
              className=""
              src="https://media.giphy.com/media/OpQgcsLTyxjzN8JlY9/giphy.gif"
              // src="https://giphy.com/gifs/mercedesbenz-jViFeG4RhnvEepuWIG"
            />
          </a>

          <p></p>
          <div>
            <h1 className="text-5xl font-bold">Choose Your Best Deal</h1>
            <p className="py-6">
              There’s three things men always talk about ~ women, sports, and
              cars.I know a lot about cars, man. <br></br>I can look at any
              car’s headlights and tell you exactly which way it’s coming.
              <br></br>I love vintage cars because you can do so much more to
              them
            </p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
