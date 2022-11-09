import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Auth from "../context/Auth";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Details from "../Pages/Details";
import AddService from "../Pages/AddService";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import Private from "../context/Private";
import MyReviews from "../Pages/MyReviews";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <App />
      </Auth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://service-review-three.vercel.app/services?limit=3"),
        element: <Home />,
      },
      {
        path: "/home",
        loader: () =>
          fetch("https://service-review-three.vercel.app/services?limit=3"),
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://service-review-three.vercel.app/service-details/${params.id}`
          ),
        element: <Details />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/add-service",
        element: (
          <Private>
            <AddService />
          </Private>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <Private>
            <MyReviews />
          </Private>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);
