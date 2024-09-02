import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  AddProperty,
  Article,
  Auth,
  BuyProperty,
  Contact,
  Homelayout,
  Landingpage,
  Loginpage,
  Paymentpage,
  Profile,
  PropertyInfo,
  Registerpage,
} from "./pages";
import { Erorr } from "./component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import loaders
import { ProfileLoader } from "./loaders/ProfileLoader";
import { LandingLoader } from "./loaders/LandingLoader";
import { BuyPropertyLoader } from "./loaders/BuyPropertyLoader";
import { PropertyInformationLoader } from "./loaders/PropertyInformationLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Erorr />,
    children: [
      {
        index: true,
        element: <Landingpage />,
        errorElement: <Erorr />,
        loader: LandingLoader,
      },
      {
        path: "/properties/:page",
        element: <BuyProperty />,
        errorElement: <Erorr />,
        loader: BuyPropertyLoader,
      },
      {
        path: "/property/:id",
        element: <PropertyInfo />,
        errorElement: <Erorr />,
        loader: PropertyInformationLoader,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Erorr />,
      },
      {
        path: "article/:id",
        element: <Article />,
        errorElement: <Erorr />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Erorr />,
      },
      {
        path: "add",
        element: <AddProperty />,
        errorElement: <Erorr />,
      },
      {
        path: "payment/:id",
        element: <Paymentpage />,
        errorElement: <Erorr />,
        loader: PropertyInformationLoader,
      },
      {
        path: "profile/:id",
        element: <Profile />,
        errorElement: <Erorr />,
        loader: ProfileLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <Erorr />,
    children: [
      {
        path: "/auth/login",
        element: <Loginpage />,
        errorElement: <Erorr />,
      },
      {
        path: "/auth/register",
        element: <Registerpage />,
        errorElement: <Erorr />,
      },
    ],
  },
]);

const App = (): JSX.Element | null => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
