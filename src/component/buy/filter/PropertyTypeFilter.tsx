import { useLoaderData } from "react-router-dom";
const PropertyTypeFilter = () => {
  const { data }: any = useLoaderData();
  const categories = Array.from(
    new Set(
      data.map((item: any) => item.attributes.category.data.attributes.name)
    )
  );
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">Property Type</h3>
      <div>
        {categories.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input type="checkbox" className="checkbox" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
