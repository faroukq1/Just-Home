import { FaWifi } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa6";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";

const PropertyDescription = () => {
  return (
    <div>
      <div className="my-6 flex flex-col gap-4">
        <h1 className="text-4xl">Maxone Ascent Hotel Luxury Kota Malang</h1>
        <p className="text-lg text-neutral-500">
          JIn. Diaponegoro V No. 12, Kec, Lowokwaru, Kota Malang
        </p>
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-wide">Description</h3>
        <p className="leading-7 text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          omnis corrupti sunt impedit modi itaque magni vero soluta eius ex
          nulla voluptas, esse asperiores numquam, dicta laudantium est dolorem
          odit delectus praesentium nemo recusandae tenetur. Magnam voluptates
          in quaerat culpa, excepturi quod eligendi at vero perferendis dolore
          ullam soluta possimus vitae illum, fugit blanditiis! Quas eum quidem
          dignissimos quaerat aliquid!
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold tracking-wide">Hotel features</h3>
        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <FaWifi className="text-2xl" /> Wifi
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <LuBedDouble className="text-2xl" /> Beds
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <FaBath className="text-2xl" /> Bathroom
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <MdOutlineBreakfastDining className="text-2xl" /> Break fast
          </span>
          <span className="flex items-center gap-2 text-md text-neutral-500">
            <BsArrowsFullscreen className="text-2xl" /> 4m x 6m
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
