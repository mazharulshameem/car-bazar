import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "./../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [] = useAdmin(user?.email);
  return (
    <div>
      <Navbar>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/allbuyers">All Buyers</Link>
              </li>

              <li>
                <Link to="/dashboard/addproducts">Add Products</Link>
              </li>
              <li>
                <Link to="/dashboard/allbuyers">All Seller</Link>
              </li>
              <li>
                <Link to="/dashboard/myproducts">My Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default DashboardLayout;
