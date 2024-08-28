import { LoaderFunction, useLoaderData } from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import { createClient } from "contentful";
import { useState } from "react";
export const loader: LoaderFunction = async () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "justHomeContent",
    limit: 6,
  });
  const totalItem = res.total;
  const data = res.items;
  return { data, totalItem };
};

const BuyProperty = () => {
  const { totalItem }: any = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () =>
    setCurrentPage((currentPage) => {
      const next = currentPage + 1;
      return next >= totalItem ? totalItem + 1 : next;
    });
  const PreviousPage = () =>
    setCurrentPage((currentPage) => {
      const preview = currentPage - 1;
      return preview <= 1 ? 1 : preview;
    });
  return (
    <div className="py-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <div className="flex gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
      <div className="mt-8 join flex justify-end gap-1">
        <button
          className={`join-item btn btn-outline ${
            currentPage === 1 && "hidden"
          }`}
          onClick={PreviousPage}
        >
          Previous page
        </button>
        <button
          className={`join-item btn btn-outline ${
            currentPage === 1 && "hidden"
          }`}
        >
          {currentPage - 1}
        </button>
        <button className="join-item btn btn-neutral">{currentPage}</button>
        <button
          className={`join-item btn btn-outline ${
            currentPage === totalItem + 1 && "hidden"
          }`}
        >
          {currentPage + 1}
        </button>
        <button
          className={`join-item btn btn-outline ${
            currentPage === totalItem + 1 && "hidden"
          }`}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BuyProperty;
