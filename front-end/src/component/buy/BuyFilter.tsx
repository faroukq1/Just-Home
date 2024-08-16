import { FilterHeader, ProperyTypeFilter } from "../../component";
const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <ProperyTypeFilter
        type="checkbox"
        name="category"
        label="Property Type"
      />
      <button
        type="submit"
        className="mt-4 btn btn-neutral btn-wide text-white text-2xl font-normal tracking-wide capitalize"
      >
        filter
      </button>
    </aside>
  );
};

export default BuyFilter;
