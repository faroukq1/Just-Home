import { CiLocationOn } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";
import { Link } from "react-router-dom";
type propertyCardType = {
  title: string;
  price: number;
  address: string;
  image: string;
  sold: boolean;
};
const PropertyCard = ({
  title,
  price,
  address,
  image,
  sold,
}: propertyCardType) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-md">
      <figure>
        <img src={`http://localhost:1337${image}`} alt="card image" />
      </figure>
      <div className="card-body">
        <h1 className="flex justify-between gap-2 text-lg text-accent-content">
          {title}
          <span className="text-error">${price / 100}</span>
        </h1>
        <p className="flex items-center gap-1 text-sm font-light text-accent-content">
          <CiLocationOn className="text-xl" />
          {address}
        </p>
        <div className="flex gap-4 mt-2">
          <span className="flex items-center gap-2 text-sm border-r border-r-neutral-400 pr-4">
            <TbBed />4 beds
          </span>
          <span className="flex items-center gap-2 text-sm border-r border-r-neutral-400 pr-4">
            <LuBath />2 Baths
          </span>
          <span className="flex items-center gap-2 text-sm pr-4">
            <MdOutlineSelectAll />
            450 sqft
          </span>
        </div>
      </div>
      <div className="bg-green-950 rounded-full text-center absolute top-2 left-2 px-4 py-2">
        <p className="uppercase text-white text-sm">
          {!sold ? "buy now" : "not available"}
        </p>
      </div>
      <Link
        to="/property"
        className={`btn btn-success mr-4 mb-4 text-white ${
          sold && "btn-disabled"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default PropertyCard;
