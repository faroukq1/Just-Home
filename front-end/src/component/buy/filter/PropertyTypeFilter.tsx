const PropertyTypeFilter = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  const categories = [
    "Commercial",
    "Industrial",
    "Luxury",
    "Residential",
    "Vacation",
    "family",
  ];
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">{label}</h3>
      <div>
        {categories.map((item: any, index: number) => {
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input
                name={name}
                value={item}
                type={type}
                className="checkbox"
              />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
