import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed z-10 py-2 px-2 sm:px-16 lg:px-20 flex gap-2 justify-between items-center bg-neutral w-full shadow ">
      <Link
        to="/"
        className="flex items-center gap-2 btn btn-neutral btn-outline border-none"
      >
        <img src={logo} alt="webste logo" className="w-6 h-6" />
        <h1 className="text-md text-white font-bold">JustHome</h1>
      </Link>
      <Navlinks />
      <div className="hidden md:flex">
        <Link
          to="/"
          className="btn btn-base-content btn-sm text-[12px] font-medium"
        >
          Add Property
        </Link>
      </div>
      <Navlinks dropdown />
    </nav>
  );
};

export default Navbar;
