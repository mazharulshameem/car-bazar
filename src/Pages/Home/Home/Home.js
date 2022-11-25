import React from "react";
import Contact from "../../../Contact/Contact";
import HomeService from "../../HomeService/HomeService";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <HomeService></HomeService>
      <Contact></Contact>
    </div>
  );
};

export default Home;
