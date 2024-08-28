import { useLoaderData } from "react-router-dom";
import { FilterHeader } from "../../component";
const BuyFilter = () => {
  const { categories }: any = useLoaderData();
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
                className="checkbox"
                type="checkbox"
                name="category"
                id="category"
              />
            </div>
          );
        })}
      </div>
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
