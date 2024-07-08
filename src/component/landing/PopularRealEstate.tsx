import { Link } from "react-router-dom";
import PrintTitle from "../global/PrintTitle";

const popularRealEstate: string[] = [
  "The Villages, FL real estate",
  "New York, Real estate",
  "Madera, CA real estate",
  "Fontana, CA real estate",
  "Moreno Valley, CA real estate",
  "Aurora, IL real estate",
  "Perris, CA real estate",
  "Minnesota Lake, MN real estate",
  "Woodbridge, VA real estate",
];

const PopularRealEstate = () => {
  return (
    <div className="my-32">
      <PrintTitle
        title="popular real estate markets"
        subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nostrum."
      />
      <div className="align-element flex flex-wrap gap-4 justify-center">
        {popularRealEstate.map((item, index) => {
          return (
            <Link
              className="btn btn-ghost btn-sm md:btn-md btn-outline rounded-full"
              to="/"
              key={index}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularRealEstate;
