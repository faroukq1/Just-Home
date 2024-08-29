import { PropertyDetails, PropertyPayment } from "../component";

const PropertyInfo = () => {
  return (
    <div className="py-32 align-element grid gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
