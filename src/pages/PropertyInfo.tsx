import { PropertyDetails, PropertyPayment } from "../component";

const PropertyInfo = () => {
  return (
    <div className="py-20 align-element flex gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
