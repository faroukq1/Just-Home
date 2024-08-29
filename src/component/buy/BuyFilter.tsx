import {
  FilterByPriceRange,
  FilterCategory,
  FilterHeader,
} from "../../component";
import useModifyParams from "../../hooks/useModifyParams";

const BuyFilter = () => {
  const { addNewCategory, filterCategories } = useModifyParams();
  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <FilterCategory addNewCategory={addNewCategory} />
      <FilterByPriceRange />
      <button
        onClick={filterCategories}
        className="mt-4 btn btn-neutral btn-wide text-white text-2xl font-normal tracking-wide capitalize"
      >
        Filter
      </button>
    </aside>
  );
};

export default BuyFilter;
