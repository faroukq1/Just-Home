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
              <Link
                className="p-3 mx-4 border-b border-b-slate-300 rounded-sm"
                to={item.toLocaleUpperCase()}
                key={index}
              >
                {item}
              </Link>
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
          <Link
            to={item.toLocaleLowerCase()}
            key={index}
            className="btn btn-ghost hover:bg-neutral-800 text-white btn-sm text-xs font-normal"
          >
            {item}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navlinks;
