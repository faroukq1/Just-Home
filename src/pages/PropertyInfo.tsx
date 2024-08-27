import { LoaderFunction } from "react-router-dom";
import { PropertyDetails, PropertyPayment } from "../component";
import { createClient } from "contentful";
export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const data = await client.getEntry(id);
  return { data };
};

const PropertyInfo = () => {
  return (
    <div className="py-16 align-element grid gap-8">
      <PropertyDetails />
      <PropertyPayment />
    </div>
  );
};

export default PropertyInfo;
