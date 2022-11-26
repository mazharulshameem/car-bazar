import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import AllBuyers from "../../Pages/Dashboard/Dashboard/AllBuyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/categories/:id",
            loader: async ({ params }) =>
              fetch(`http://localhost:5000/category/${params.id}`),

            element: <Categories></Categories>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
    ],
  },
]);

export default router;
