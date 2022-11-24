import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Navbar>
  );
};

export default Main;
