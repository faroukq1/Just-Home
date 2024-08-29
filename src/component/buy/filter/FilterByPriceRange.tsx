import { convertPrice } from "../../../util/helperFuntions";

const MIN_PRICE = 100_000;
const MAX_PRICE = 1_000_000;
const STEPS = 1_000;
const FilterByPriceRange = ({ priceRange }: any) => {
  const [price, setPrice] = priceRange;
  return (
    <div className="my-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <span>{convertPrice(price)}</span>
      </div>
      <input
        type="range"
        min={MIN_PRICE}
        max={MAX_PRICE}
        value={price}
        step={STEPS}
        onChange={(e) => setPrice(parseInt(e.target.value))}
        className="range range-xs"
      />
    </div>
  );
};

export default FilterByPriceRange;
