import { useLoaderData } from "react-router-dom";
const PropertyTypeFilter = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  const { data }: any = useLoaderData();
  const categories = Array.from(
    new Set(
      data.map((item: any) => item.attributes.category.data.attributes.name)
    )
  );
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">{label}</h3>
      <div>
        {categories.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input name={name} type={type} className="checkbox" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
