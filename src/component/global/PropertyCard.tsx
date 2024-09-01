import { CiLocationOn } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";
import { Link } from "react-router-dom";
import { convertPrice } from "../../util/helperFuntions";
import ImageWithBlurHash from "./ImageWithBlurHash";
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
  const { bedrooms, bathrooms, floor_area } = features;
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-md">
      <figure>
        <ImageWithBlurHash
          blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          imageUrl={`https:${image}`}
          alt={title}
          width={500}
          height={250}
        />
      </figure>
      <div className="card-body">
        <h1 className="flex justify-between gap-2">
          {title.length > 30 ? title.substring(0, 25) + "..." : title}
          <span className="text-error">{convertPrice(price)}</span>
        </h1>
        <p className="flex items-center gap-1 text-sm font-light">
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
        className={`ml-2 btn btn-neutral mr-4 mb-4 text-white ${
          sold && "btn-disabled"
        }`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default PropertyCard;
