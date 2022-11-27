import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const DisplayError = () => {
  const { userLogout } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <p className="text-red-500">Something went wrong!!!</p>
        <p className="text-red-400">{error.statusText || error.message}</p>
        <h4 className="text-3xl">
          {" "}
          Please <button onClick={handleLogOut}>LOGOUT</button> and log back in
        </h4>
      </div>
    </div>
  );
};

export default DisplayError;
