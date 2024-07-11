import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import PropertyCard from "../global/PropertyCard";
import { useState } from "react";
import PropertyCardList from "../global/PropertyCardList";

const PropertyMarketPlace = () => {
  const [view, setView] = useState("grid");
  const makeItGrid = () => setView("grid");
  const makeItList = () => setView("list");
  return (
    <div className="py-4 overflow-auto max-h-[85vh]">
      <div className="w-full h-fit py-6 px-2 flex justify-between">
        <h1 className="text-neutral-700 font-medium tracking-wide">
          result : 45 property founds
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={makeItGrid}
            className={`btn ${
              view === "grid" ? "btn-success" : "btn-ghost"
            } btn-sm btn-circle btn-active`}
          >
            <BsGrid1X2Fill className="text-white" />
          </button>

          <button
            onClick={makeItList}
            className={`btn btn-sm ${
              view === "list" ? "btn-success" : "btn-ghost"
            } btn-circle`}
          >
            <FaThList />
          </button>
          <select className="select select-bordered select-sm select-success w-full">
            <option>Popular</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Array.from({ length: 10 }, (_, index) => {
          return view === "grid" ? (
            <PropertyCard key={index} />
          ) : (
            <PropertyCardList key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyMarketPlace;
