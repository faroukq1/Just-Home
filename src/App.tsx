import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Article,
  Blog,
  BuyProperty,
  Contact,
  Homelayout,
  Landingpage,
  PropertyInfo,
} from "./pages";
import { Erorr } from "./component";
import { loader as landingLoader } from "./pages/Landingpage";
import { loader as propertiesLoader } from "./pages/BuyProperty";
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
        loader: landingLoader,
      },
      {
        path: "/properties",
        element: <BuyProperty />,
        errorElement: <Erorr />,
        loader: propertiesLoader,
      },
      {
        path: "/property/:id",
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
        path: "article/:id",
        element: <Article />,
        errorElement: <Erorr />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Erorr />,
      },
    ],
  },
]);
const App = (): JSX.Element | null => {
  return <RouterProvider router={router} />;
};

export default App;
