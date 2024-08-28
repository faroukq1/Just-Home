import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

type propertyCardList = {
  id: number;
  title: string;
  address: string;
  description: string;
  image: string;
  images: string[];
};
const PropertyCardList = ({
  id,
  title,
  address,
  description,
  image,
  images,
}: propertyCardList) => {
  const [select, setSelect] = useState(0);
  const [currentImage, setCurrentImage] = useState(image);
  const handlePictureChange = (image: string, index: number) => {
    setSelect(index);
    setCurrentImage(image);
  };
  return (
    <div className="grid gap-10 md:grid-cols-2 p-2 shadow-md border rounded-md">
      <div className="flex flex-col gap-2 justify-center items-center">
        <img
          src={`https:${currentImage}`}
          alt="image"
          className="h-[300px] w-[600px] object-cover rounded-md"
          loading="lazy"
        />
        <Link
          className="text-white w-full btn btn-success"
          to={`/property/${id}`}
        >
          Book Now
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl tracking-wide font-medium">{title}</h3>
        <p className="text-neutwral-400 text-sm mb-3">{address}</p>
        <div className="flex gap-4 my-4">
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
        <p className="text-sm leading-6 font-light">{description}</p>

        <div className="mt-2">
          <h3 className="tracking-wide mb-2">more image</h3>
          <div className="flex gap-2">
            {images.map((item: any, index: number) => {
              const image = item.fields.file.url;
              return (
                <button
                  key={item.sys.id}
                  onClick={() => handlePictureChange(image, index)}
                >
                  <img
                    src={`https:${image}`}
                    loading="lazy"
                    className={`w-16 h-16 object-cover ${
                      select === index && "border-2 border-red-800"
                    } rounded-md`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardList;
