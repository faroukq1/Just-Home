import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";

const BuyProperty = () => {
  return (
    <div className="pt-20 h-screen align-element">
      <BuySearchBar />
      <div className="grid grid-cols-auto-1fr gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
    </div>
  );
};

export default BuyProperty;
