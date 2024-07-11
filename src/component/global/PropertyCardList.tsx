import { TbBed } from "react-icons/tb";
import image from "../../assets/kitchen.png";
import { LuBath } from "react-icons/lu";
import { MdOutlineSelectAll } from "react-icons/md";

const PropertyCardList = () => {
  return (
    <div className="grid grid-cols-2 p-2 shadow-md bg-neutral-50">
      <div className="flex justify-center items-center">
        <img src={image} alt="image" className="h-[90%] w-[90%] rounded-md" />
      </div>
      <div>
        <h3 className="text-xl tracking-wide font-medium">
          card title example
        </h3>
        <p className="text-neutral-400 text-sm mb-3">card description</p>
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
        <p className="text-sm leading-6 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nulla quo obcaecati dolorem sed sit ipsa perferendis debitis qui, quas
        </p>
        <div className="mt-2">
          <h3 className="tracking-wide text-neutral-500 mb-2">more image</h3>
          <div className="flex gap-2">
            {Array.from({ length: 5 }, (_, index) => {
              return (
                <img
                  src={image}
                  alt="image"
                  key={index}
                  className={`w-16 h-16 object-cover ${
                    index === 0 && "border-2 border-red-800"
                  } rounded-md`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardList;
