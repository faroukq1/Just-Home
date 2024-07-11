import image from "../../assets/kitchen.png";
import { CiLocationOn } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";

const PropertyCard = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-md">
      <figure>
        <img src={image} alt="card image" />
      </figure>
      <div className="card-body">
        <h1 className="flex justify-between gap-2 text-lg text-accent-content">
          Skyper Pool Apartment <span className="text-error">$280,000</span>
        </h1>
        <p className="flex items-center gap-1 text-sm font-light text-accent-content">
          <CiLocationOn className="text-xl" />
          1020 Bloomigdale Ave
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
        <p className="uppercase text-white text-sm">for sale</p>
      </div>
    </div>
  );
};

export default PropertyCard;
