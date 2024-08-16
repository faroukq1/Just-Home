import { useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubBold } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";

const PropertyForm = () => {
  const [hasWifi, setHasWifi] = useState(false);
  const handleWifiStateChanges = () => setHasWifi(!hasWifi);
  return (
    <div className="flex flex-col items-start carousel-item w-full">
      <h3 className="ml-2 text-xl font-semibold mb-4">Property Information</h3>
      <div className="w-full flex gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Title
            </span>
          </div>
          <input
            type="text"
            placeholder="ex : Spacious Family Home"
            className="input input-bordered input-md w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Category
            </span>
          </div>

          <input
            type="text"
            placeholder="ex : Vacation"
            className="input input-bordered p-4 w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Country
            </span>
          </div>

          <input
            type="text"
            placeholder="ex : New York"
            className="input input-bordered p-4 w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Address
            </span>
          </div>

          <input
            type="text"
            placeholder="ex : 808 Greenway Plaza, Houston, TX"
            className="input input-bordered p-4 w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Price
            </span>
          </div>

          <input
            type="text"
            placeholder="ex : 425,000"
            className="input input-bordered p-4 w-full max-w-xs"
          />
        </label>
      </div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-semibold leading-8">
            Property Description
          </span>
        </div>
        <div className="min-h-[15vh] border rounded-md">
          <input
            type="text"
            placeholder="ex : This stylish condo offers modern living in a vibrant neighborhood. The open floor plan features a sleek living area with large windows and high ceilings. The kitchen is equipped with stainless steel appliances, granite countertops, and a breakfast bar. The condo includes two bedrooms and two bathrooms, with the master suite featuring an en-suite bathroom and ample closet space. Residents enjoy amenities such as a fitness center, a swimming pool, and a community lounge. Located near shops, restaurants, and public transport, this condo is perfect for those seeking a contemporary urban lifestyle."
            className="outline-none p-4 w-full overflow-auto"
          />
        </div>
      </label>
      <h3 className="mt-8 text-xl font-semibold">Property Features</h3>
      <div className="w-full flex items-center gap-4">
        <div className="flex gap-8 bg-neutral-content px-10 py-3 rounded-md">
          <button
            className={`btn btn-circle ${
              hasWifi ? "btn-neutral" : "btn-ghost"
            }`}
            onClick={handleWifiStateChanges}
          >
            <FaWifi className="text-2xl" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <LiaBedSolid className="text-2xl" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <PiBathtubBold className="text-2xl" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <RxDimensions className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
