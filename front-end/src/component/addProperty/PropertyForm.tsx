import { useState } from "react";
import { FaWifi } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubBold } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";

const PropertyForm = () => {
  return (
    <div className="flex flex-col items-start carousel-item w-full">
      <h3 className="ml-2 text-xl font-semibold mb-4">Property Information</h3>
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-4">
        <label className="form-control w-full">
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
            className="input input-bordered p-4 w-full"
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
            className="input input-bordered p-4 w-full"
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
            className="input input-bordered p-4 w-full"
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
          <span className="label-text text-xl font-semibold my-4 leading-8">
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
      <h3 className="text-xl font-semibold my-6">Property Features</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 w-10/12 gap-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold leading-8">beds</span>
          </div>

          <input
            type="text"
            placeholder="ex : 4 beds"
            className="input input-bordered p-4"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              bathrooms
            </span>
          </div>
          <input
            type="text"
            placeholder="ex : 2 bathrooms"
            className="input input-bordered p-4 w-full"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold leading-8">
              Property Dimension
            </span>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="ex : 50m"
              className="input input-bordered p-4 w-full"
            />
            <input
              type="text"
              placeholder="ex : 10m"
              className="input input-bordered p-4 w-full"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PropertyForm;
