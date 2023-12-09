import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import AddProductPage from "../Pages/AddProductPage/AddProductPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddBrand from "../Components/AddBrand/AddBrand";
import ViewProductsList from "../Pages/Dashboard/ViewProductsList";
import Shop from "../Pages/Shop/Shop";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Private_Routes from "./Private_Routes";
import Hide_Dashboard_Routes from "./Hide_Dashboard_Routes";
import Cart from "../Pages/Shop/Cart";
import UpdateProductsInfo from "../Pages/Dashboard/UpdateProductsInfo";
import Profile from "../Pages/Dashboard/Profile";
import Hide_Auth_Routes from "./Hide_Auth_Routes";

const Public_Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("https://tech-haven-server.vercel.app/products"),
      },
      {
        path: "/shop/:id",
        element: (
          <Private_Routes>
            <ProductPage />
          </Private_Routes>
        ),
        loader: ({ params }) =>
          fetch(`https://tech-haven-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
        // loader: () => fetch(`https://tech-haven-server.vercel.app/user/${user.email}`),
      },
      {
        path: "/add-product",
        element: <AddProductPage />,
      },
      {
        path: "/auth",
        element: (
          <Hide_Auth_Routes>
            <AuthLayout />
          </Hide_Auth_Routes>
        ),
        children: [
          {
            path: "/auth/signin",
            element: <SignIn />,
          },
          {
            path: "/auth/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <Hide_Dashboard_Routes>
            <Dashboard />
          </Hide_Dashboard_Routes>
        ),
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/view-product",
            element: <ViewProductsList />,
            loader: () =>
              fetch("https://tech-haven-server.vercel.app/products"),
          },
          {
            path: "/dashboard/view-product/:id",
            element: <UpdateProductsInfo />,
            loader: ({ params }) =>
              fetch(
                `https://tech-haven-server.vercel.app/product/${params.id}`
              ),
          },
          {
            path: "/dashboard/add-brands",
            element: <AddBrand />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Public_Routes;
