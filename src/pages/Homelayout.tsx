import { Outlet, useNavigation } from "react-router-dom";
import { LoadingSpinner, Navbar } from "../component";

const Homelayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <LoadingSpinner quantity={4} />;
  }

  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Homelayout;
