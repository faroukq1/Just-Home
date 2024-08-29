import { FilterCategory, FilterHeader } from "../../component";

const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <FilterCategory />
      <button
        type="submit"
        className="mt-4 btn btn-neutral btn-wide text-white text-2xl font-normal tracking-wide capitalize"
      >
        Filter
      </button>
    </aside>
  );
};

export default BuyFilter;
