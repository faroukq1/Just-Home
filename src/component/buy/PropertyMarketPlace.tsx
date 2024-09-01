import { BsGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import PropertyCard from "../global/PropertyCard";
import { useState } from "react";
import PropertyCardList from "../global/PropertyCardList";
import { useLoaderData } from "react-router-dom";

const PropertyMarketPlace = () => {
  const { data }: any = useLoaderData();
  const currentView = localStorage.getItem("view") || "grid";
  const [view, setView] = useState(currentView);
  const changeView = () => {
    if (view === "grid") {
      localStorage.setItem("view", "list");
      setView("list");
      return;
    }
    localStorage.setItem("view", "grid");
    setView("grid");
  };
  return (
    <div className="w-full max-h-[75vh] overflow-auto">
      <div className="w-full h-fit py-6 px-2 flex justify-between">
        <h1 className="font-medium tracking-wide">
          result : {data.length} property found{data.length >= 2 && "s"}
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={changeView}
            className={`btn ${
              view === "grid" ? "btn-neutral" : "btn-ghost"
            } btn-sm btn-circle btn-active`}
          >
            <BsGrid1X2Fill className="text-white" />
          </button>

          <button
            onClick={changeView}
            className={`btn btn-sm ${
              view === "list" ? "btn-neutral" : "btn-ghost"
            } btn-circle`}
          >
            <FaThList />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center 2xl:justify-start items-center gap-2">
        {data.map((item: any) => {
          const cardData = {
            id: item.sys.id,
            title: item.fields.title,
            price: item.fields.price,
            address: item.fields.address,
            sold: item.fields.sold,
            description: item.fields.description,
            image: item.fields.image.fields.file.url,
            images: item.fields.images,
            features: item.fields.features,
          };
          return view === "grid" ? (
            <PropertyCard key={item.sys.id} {...cardData} />
          ) : (
            <PropertyCardList key={item.sys.id} {...cardData} />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyMarketPlace;
