import { useLoaderData } from "react-router-dom";

const PropertyPayment = () => {
  const { data }: any = useLoaderData();
  return <div className="border-4 border-red-500"></div>;
};

export default PropertyPayment;
