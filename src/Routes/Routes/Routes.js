import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
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
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);

export default router;
