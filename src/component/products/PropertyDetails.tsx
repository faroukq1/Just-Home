import {
  PropertyDescription,
  PropertyImages,
  PropertyBadges,
} from "../../component";
const PropertyDetails = () => {
  return (
    <div className="h-[100%]">
      {/* <PropertyImages /> */}
      <PropertyBadges />
      <PropertyDescription />
    </div>
  );
};

export default PropertyDetails;
