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
      className="overflow-auto max-h-[80vh]"
    >
      <div className="w-full h-fit py-6 px-2 flex justify-between">
        <h1 className="text-neutral-700 font-medium tracking-wide">
          result : 45 property founds
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
      <div className="flex flex-wrap justify-center items-center gap-4">
        {data.map((item: any) => {
          console.log();
          const {
            title,
            price,
            address,
            sold,
            description,
          }: {
            title: string;
            price: number;
            address: string;
            sold: boolean;
            description: string;
          } = item.attributes;
          const image =
            item.attributes.image.data.attributes.formats.medium.url;
          const images = item.attributes.images.data;
          return view === "grid" ? (
            <PropertyCard
              title={title}
              price={price}
              address={address}
              image={image}
              sold={sold}
              key={item.id}
            />
          ) : (
            <PropertyCardList
              title={title}
              address={address}
              description={description}
              image={image}
              images={images}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyMarketPlace;
