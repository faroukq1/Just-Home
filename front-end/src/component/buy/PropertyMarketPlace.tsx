import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import PropertyCard from "../global/PropertyCard";
import { useState } from "react";
import PropertyCardList from "../global/PropertyCardList";
import { useLoaderData } from "react-router-dom";

const PropertyMarketPlace = () => {
  const [view, setView] = useState("grid");
  const { data }: any = useLoaderData();
  return (
    <div
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className="w-full overflow-auto max-h-[80vh]"
    >
      <div className="w-full h-fit py-6 px-2 flex justify-between">
        <h1 className="text-neutral-700 font-medium tracking-wide">
          result : {data.length} property found{data.length >= 2 && "s"}
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setView("grid")}
            className={`btn ${
              view === "grid" ? "btn-success" : "btn-ghost"
            } btn-sm btn-circle btn-active`}
          >
            <BsGrid1X2Fill className="text-white" />
          </button>

          <button
            onClick={() => setView("list")}
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
      <div className="flex flex-wrap justify-center 2xl:justify-start items-center gap-4">
        {data.map((item: any) => {
          const cardData = {
            id: item.id,
            title: item.attributes.title,
            price: item.attributes.price,
            address: item.attributes.address,
            sold: item.attributes.sold,
            description: item.attributes.description,
            image: item.attributes.image.data.attributes.formats.medium.url,
            images: item.attributes.images.data,
            features: item.attributes.features.features,
          };
          console.log();
          return view === "grid" ? (
            <PropertyCard key={item.id} {...cardData} />
          ) : (
            <PropertyCardList key={item.id} {...cardData} />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyMarketPlace;
