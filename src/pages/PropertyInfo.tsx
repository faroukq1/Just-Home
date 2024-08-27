import { LoaderFunction } from "react-router-dom";
import { PropertyDetails, PropertyPayment } from "../component";
import { createClient } from "contentful";
export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const client = createClient({
    space: "iy103w94ko7f",
    accessToken: "uSMTg31zCEiwkLrWvB99zzNYaKphOoefjDU7HGadzvs",
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
