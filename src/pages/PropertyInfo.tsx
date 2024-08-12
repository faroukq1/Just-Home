import { PropertyDetails, PropertyPayment } from "../component";
import customFetch from "../util/customFetch";

export const loader = async ({ params }: any) => {
  const response = await customFetch(
    `/api/properties/${params.id}?populate[image]=*&populate[images]=*`
  );
  const data = response.data.data;
  return { data };
};

const PropertyInfo = () => {
  return (
    <div className="py-28 align-element flex gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
