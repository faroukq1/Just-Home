import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import customFetch from "../util/customFetch";

export const loader = async () => {
  const response = await customFetch(
    "/api/properties?populate[image]=*&populate[images]=*"
  );
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
