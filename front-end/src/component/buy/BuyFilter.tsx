import {
  CustomInputNumber,
  FilterHeader,
  ProperyTypeFilter,
} from "../../component";
const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <ProperyTypeFilter
        type="checkbox"
        name="category"
        label="Property Type"
      />
      {/* <div className="flex gap-4 mt-4">
        <CustomInputNumber
          name="minPrice"
          title="Min Price"
          max={3000}
          min={0}
        />
        <CustomInputNumber
          name="maxPrice"
          title="Max Price"
          max={10000000}
          min={0}
        />
      </div> */}
      <button
        type="submit"
        className="mt-4 btn btn-success btn-wide text-white text-2xl font-normal tracking-wide capitalize"
      >
        filter
      </button>
    </aside>
  );
};

export default BuyFilter;
