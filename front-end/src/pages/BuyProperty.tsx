import { LoaderFunction } from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import customFetch from "../util/customFetch";
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const param: Record<string, string> = Object.fromEntries(searchParams);

  const response = await customFetch("/api/properties", {
    params: {
      filters: {
        category: {
          name: {
            $eq: param.category,
          },
        },
        price: {
          $gte: param.minPrice,
          $lte: param.maxPrice,
        },
      },
      populate: {
        image: "*",
        images: "*",
        category: "*",
      },
    },
  });

  const data = response.data.data;
  return { data };
};

const BuyProperty = () => {
  return (
    <div className="py-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <div className="flex gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
    </div>
  );
};

export default BuyProperty;
