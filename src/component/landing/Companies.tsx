import PrintTitle from "../global/PrintTitle";
import amazon from "../../assets/amazon.png";
import amd from "../../assets/amd.png";
import cisco from "../../assets/disco.png";
import dropcam from "../../assets/dropcam.png";
import logitech from "../../assets/logitech.png";
import spotify from "../../assets/spotify.png";
const companies: string[] = [amazon, amd, cisco, dropcam, logitech, spotify];

const Companies = () => {
  return (
    <div className="align-element my-20">
      <p className="text-center text-sm text-neutral-500">
        Thousands of world’s leading companies trust Space
      </p>
      <div className="flex justify-between gap-4 my-8">
        {companies.map((company) => {
          return (
            <img
              src={company}
              alt="company"
              className=" object-contain w-20 h-20"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
