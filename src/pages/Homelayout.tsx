import { Outlet, useNavigation } from "react-router-dom";
import { Footer, LoadingSpinner, Navbar } from "../component";

const Homelayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner quantity={4} />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};

export default Homelayout;
