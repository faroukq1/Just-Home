import logo from "../../../assets/logo.png";
import { icons } from "../../../util/landingData";

const FooterHeader = () => {
  return (
    <div className="flex justify-between items-center py-20 border-b border-b-neutral-800">
      <div className="flex items-center gap-4 btn btn-neutral btn-outline border-none">
        <img src={logo} alt="webste logo" className="w-12 h-12" />
        <h1 className="text-2xl text-white font-bold">JustHome</h1>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="text-xl text-white font-bold capitalize">follow us</h4>
        {icons.map(({ id, link, icon }) => {
          return (
            <a href={link} key={id} className="text-white text-xl">
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterHeader;
