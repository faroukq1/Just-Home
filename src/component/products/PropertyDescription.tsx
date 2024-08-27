import { FaWifi } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const PropertyDescription = () => {
  const { data }: any = useLoaderData();
  const { title, address, description, features } = data.fields;
  const { wifi, bathrooms, bedrooms, floor_area } = features;
  return (
    <div>
      <div className="my-6 flex flex-col gap-4">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-lg text-neutral-500">{address}</p>
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-wide">Description</h3>
        <p className="leading-7 text-neutral-500">{description}</p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold tracking-wide">Hotel features</h3>
        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <FaWifi className="text-2xl" />
            {!wifi && "No"} Wifi
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <LuBedDouble className="text-2xl" /> {bedrooms} Beds
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <FaBath className="text-2xl" /> {bathrooms} Bathroom
            {bathrooms > 1 && "s"}
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <BsArrowsFullscreen className="text-2xl" /> {floor_area}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
