import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  AddProperty,
  Article,
  Blog,
  BuyProperty,
  Contact,
  Homelayout,
  Landingpage,
  Paymentpage,
  Profile,
  PropertyInfo,
} from "./pages";
import { Erorr } from "./component";

// import loader
import { ProfileLoader } from "./loaders/ProfileLoader";
import { LandingLoader } from "./loaders/LandingLoader";
import { BuyPropertyLoader } from "./loaders/BuyPropertyLoader";
import { PropertyInformationLoader } from "./loaders/PropertyInformationLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
