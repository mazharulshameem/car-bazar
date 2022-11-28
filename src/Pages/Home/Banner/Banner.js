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
          <a href="#">
            <img
              className=""
              src="https://media.giphy.com/media/OpQgcsLTyxjzN8JlY9/giphy.gif"
              // src="https://media.giphy.com/media/3oriOia43pNRKuzKDe/giphy.gif"
              alt=""
            />
          </a>

          <p></p>
          <div>
            <h1 className="text-5xl font-bold text-info mb-3 uppercase ">
              Your Best Dream Car <br></br>Just One Click Away!
            </h1>
            <p className="py-6 text-info">
              There’s three things men always talk about ~ women, sports, and
              cars.I know a lot about cars, man. <br></br>I can look at any
              car’s headlights and tell you exactly which way it’s coming.
              <br></br>I love vintage cars because you can do so much more to
              them
            </p>
            <PrimaryButton>
              SEE USED CAR{" "}
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
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
