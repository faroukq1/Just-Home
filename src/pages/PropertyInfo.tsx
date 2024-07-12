import { PropertyDetails, PropertyPayment } from "../component";

const PropertyInfo = () => {
  return (
    <div className="px-20 pt-20 flex gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
