import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";

const BuyProperty = () => {
  return (
    <div className="pt-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <div className="flex gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
    </div>
  );
};

export default BuyProperty;
