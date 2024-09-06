import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Navlinks from "./Navlinks";
import defaultavatar from "../../../assets/defaultavatar.jpg";
import DarkModeToggle from "./DarkModeToggle";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation("/auth");
  };
  const handleLogOut = () => {
    logout();
    window.location.href = window.location.origin;
  };
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
      <div className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div className="avatar" role="button" tabIndex={0}>
              <div className="max-w-10 rounded-full">
                <img src={user?.picture || defaultavatar} alt="profile image" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow grid gap-1"
            >
              <li>
                <Link to="/profile/74MQCC6VRBLzSmEaJbigLt">profile</Link>
              </li>
              <li>
                <span>
                  language
                  <span className="w-full bg-slate-600 p-1 rounded-lg text-center text-white">
                    english
                  </span>
                </span>
              </li>
              <li>
                <Link to="/add">Add Property</Link>
              </li>
              <li>
                <DarkModeToggle />
              </li>
              <li>
                <button onClick={handleLogOut} className="bg-error text-white">
                  logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-primary-content btn-sm"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
      <Navlinks dropdown />
    </nav>
  );
};

export default Navbar;
