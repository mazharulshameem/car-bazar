import React from "react";
import Contact from "../../../Contact/Contact";
import About from "../../About/About";
import HomeService from "../../HomeService/HomeService";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <HomeService></HomeService>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
