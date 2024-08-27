import { CiLocationOn } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";
import { Link } from "react-router-dom";
import { convertPrice } from "../../util/helperFuntions";
type propertyCardType = {
  id: number;
  title: string;
  price: number;
  address: string;
  image: string;
  sold: boolean;
  features: any;
};
const PropertyCard = ({
  id,
  title,
  price,
  address,
  image,
  sold,
  features,
}: propertyCardType) => {
  console.log(1);
  const { bedrooms, bathrooms, floor_area } = features;
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-md">
      <figure>
        <img
          src={`https:${image}`}
          alt="card image"
          className="w-96 h-60 object-cover"
        />
      </figure>
      <div className="card-body">
        <h1 className="flex justify-between gap-2 text-lg text-accent-content">
          {title}
          <span className="text-error">{convertPrice(price)}</span>
        </h1>
        <p className="flex items-center gap-1 text-sm font-light text-accent-content">
          <CiLocationOn className="text-xl" />
          {address}
        </p>
        <div className="flex gap-4 mt-2">
          <span className="flex items-center gap-2 text-sm border-r border-r-neutral-400 pr-4">
            <TbBed />
            {bedrooms} bed{bedrooms > 1 && "s"}
          </span>
          <span className="flex items-center gap-2 text-sm border-r border-r-neutral-400 pr-4">
            <LuBath />
            {bathrooms} Bath{bathrooms > 1 && "s"}
          </span>
          <span className="flex items-center gap-2 text-sm">
            <MdOutlineSelectAll />
            {floor_area}
          </span>
        </div>
      </div>
      <Link
        to={`/property/${id}`}
        className={`btn btn-neutral mr-4 mb-4 text-white ${
          sold && "btn-disabled"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default PropertyCard;
