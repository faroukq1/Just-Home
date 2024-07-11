import {
  BuyFilter,
  BuySearchBar,
  PropertyMarketPlace,
  SmallScreenFilter,
} from "../component";

const BuyProperty = () => {
  return (
    <div className="pt-20 h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <SmallScreenFilter />
      <div className="grid grid-cols-auto-1fr gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
    </div>
  );
};

export default BuyProperty;
