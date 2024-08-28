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
  Profile,
  PropertyInfo,
} from "./pages";
import { Erorr } from "./component";
import { loader as landingLoader } from "./pages/Landingpage";
import { loader as propertiesLoader } from "./pages/BuyProperty";
import { loader as propertyInfoLoader } from "./pages/PropertyInfo";
import { loader as profileLoader } from "./pages/Profile";
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
        path: "/properties/:page",
        element: <BuyProperty />,
        errorElement: <Erorr />,
        loader: propertiesLoader,
      },
      {
        path: "/property/:id",
        element: <PropertyInfo />,
        errorElement: <Erorr />,
        loader: propertyInfoLoader,
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
      {
        path: "add",
        element: <AddProperty />,
        errorElement: <Erorr />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
        errorElement: <Erorr />,
        loader: profileLoader,
      },
    ],
  },
]);
const App = (): JSX.Element | null => {
  return <RouterProvider router={router} />;
};

export default App;
