import { useLoaderData } from "react-router-dom";
import useModifyParams from "../../../hooks/useModifyParams";

const FilterCategory = () => {
  const { categories }: any = useLoaderData();
  const { addNewCategory, filterCategories } = useModifyParams();
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold">Categories</h3>
      {categories.map((item: any) => {
        const { name } = item.fields;
        const { id } = item.sys;
        return (
          <div key={name} className="w-full flex justify-between pr-4 my-2">
            <p className="text-lg">{name}</p>
            <input
              type="checkbox"
              name="category"
              id={name}
              className="checkbox"
              onChange={(e) => addNewCategory(id, e.target.checked)}
            />
          </div>
        );
      })}
      <button className="btn btn-neutral btn-wide" onClick={filterCategories}>
        filter categories
      </button>
    </div>
  );
};

export default FilterCategory;
