import {
  PropertyDescription,
  PropertyImages,
  PropertyBadges,
} from "../../component";
const PropertyDetails = () => {
  return (
    <div className="flex-1 h-screen">
      <PropertyImages />
      <PropertyBadges />
      <PropertyDescription />
    </div>
  );
};

export default PropertyDetails;
