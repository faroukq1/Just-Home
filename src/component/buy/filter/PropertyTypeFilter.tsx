import { useLoaderData } from "react-router-dom";
type propertyTypeFilterType = {
  name: string;
  label: string;
  type: string;
};
const PropertyTypeFilter = ({ name, label, type }: propertyTypeFilterType) => {
  const { categories }: any = useLoaderData();
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">{label}</h3>
      <div>
        {categories.map((item: any, index: number) => {
          const category = item.attributes.name;
          return (
            <div key={index} className="flex item-center gap-4 w-full mt-2">
              <input
                type={type}
                name={name}
                value={category}
                className="checkbox"
              />
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PropertyTypeFilter;
