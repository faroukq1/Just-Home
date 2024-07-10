import logo from "../../../assets/logo.png";
<<<<<<< HEAD
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
type iconsType = {
  id: number;
  link: string;
  icon: JSX.Element;
};
const icons: iconsType[] = [
  {
    id: 1,
    link: "facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    link: "x.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    link: "instgram.com",
    icon: <CiInstagram />,
  },
  {
    id: 4,
    link: "linkedin.com",
    icon: <FaLinkedin />,
  },
];
=======
import { icons } from "../../../util/landingData";
>>>>>>> 94777a155c246844600990d15b75a53c4a341e6a

const FooterHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 justify-between items-center py-20 border-b border-b-neutral-800">
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
