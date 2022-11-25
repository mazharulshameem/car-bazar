import React from "react";

const Loader = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl  font-bold">Loading...</h1>
      <progress className="progress w-56 h-8"></progress>
    </div>
  );
};

export default Loader;
