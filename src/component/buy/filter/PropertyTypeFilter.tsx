type propertyTypeFilterType = {
  name: string;
  label: string;
  type: string;
};
const PropertyTypeFilter = ({ label }: propertyTypeFilterType) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">{label}</h3>
      <div></div>
    </div>
  );
};
export default PropertyTypeFilter;
