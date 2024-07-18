import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Blog,
  BuyProperty,
  Contact,
  Homelayout,
  Landingpage,
  ProfilePage,
  PropertyInfo,
} from "./pages";
import { Erorr } from "./component";

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
      },
      {
        path: "/properties",
        element: <BuyProperty />,
        errorElement: <Erorr />,
      },
      {
        path: "/property",
        element: <PropertyInfo />,
        errorElement: <Erorr />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Erorr />,
      },
      {
        path: "blog",
        element: <Blog />,
        errorElement: <Erorr />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Erorr />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        errorElement: <Erorr />,
      },
    ],
  },
]);
const App = (): JSX.Element | null => {
  return <RouterProvider router={router} />;
};

export default App;
