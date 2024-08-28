import { useLoaderData, useSearchParams } from "react-router-dom";
import { FilterHeader } from "../../component";

const BuyFilter = () => {
  const { categories }: any = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const getCategoriesFromParams = () => {
    const categoryParams = searchParams.getAll("category");
    return new Set(categoryParams);
  };

  const updateFilter = (category: string, checked: boolean) => {
    const currentCategories = getCategoriesFromParams();
    if (checked) {
      currentCategories.add(category);
    } else {
      currentCategories.delete(category);
    }
    setSearchParams({ category: Array.from(currentCategories) });
  };

  const currentCategories = getCategoriesFromParams();

  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <div className="my-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        {categories.map((item: any) => {
          const { name } = item.fields;
          return (
            <div key={name} className="w-full flex justify-between pr-4 my-2">
              <p className="text-lg">{name}</p>
              <input
                type="checkbox"
                name="category"
                id={`category-${name}`}
                checked={currentCategories.has(name)}
                onChange={(e) => updateFilter(name, e.target.checked)}
                className="checkbox"
              />
            </div>
          );
        })}
      </div>
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
