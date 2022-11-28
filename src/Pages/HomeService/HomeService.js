import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../LeftBar/LeftBar";

const HomeService = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase  text-4xl font-bold mt-10">
          {" "}
          find your next car at car bazzar
        </h1>
        <div className=" h-full p-4 bg-purple-500 grid grid-cols-4 gap-4 mt-4 ">
          <div className="col-span-1 bg-slate-300 ">
            <LeftBar></LeftBar>
          </div>
          <div className="col-span-3 bg-purple-400 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
