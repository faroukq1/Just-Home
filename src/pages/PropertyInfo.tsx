import { PropertyDetails, PropertyPayment } from "../component";

const PropertyInfo = () => {
  return (
    <div className="py-28 align-element flex gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
