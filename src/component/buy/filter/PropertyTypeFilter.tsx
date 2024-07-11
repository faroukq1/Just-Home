const propertyTypes: string[] = [
  "house",
  "townhouse",
  "apartment",
  "room",
  "parking",
];
const PropertyTypeFilter = () => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">Property Type</h3>
      <div>
        {propertyTypes.map((item, index) => {
          return (
            <div className="flex items-center gap-4 w-full mt-2">
              <input key={index} type="checkbox" className="checkbox" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
