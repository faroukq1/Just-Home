import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navlinks } from "../../../util/landingData";

const Navlinks = ({ dropdown }: { dropdown?: boolean }) => {
  if (dropdown) {
    return (
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-md">
          <IoMenu className="text-3xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-slate-200 rounded-box z-[1] p-2 mt-4 shadow w-52"
        >
          {navlinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="p-3 mx-4 border-b border-b-slate-300 rounded-sm"
                  to={item.toLocaleUpperCase()}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <ul className="hidden md:flex gap-3 items-center">
      {navlinks.map((item, index) => {
        return (
          <li key={index} className="btn btn-ghost">
            <Link
              className="text-white text-xs font-normal last:border-b-transparent"
              to={item}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
