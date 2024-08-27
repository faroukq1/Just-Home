import { Form, LoaderFunction } from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import { createClient } from "contentful";
export const loader: LoaderFunction = async () => {
  const client = createClient({
    space: "iy103w94ko7f",
    accessToken: "uSMTg31zCEiwkLrWvB99zzNYaKphOoefjDU7HGadzvs",
  });

  const res = await client.getEntries({
    content_type: "justHomeContent",
  });

  const data = res.items;
  return { data };
};

const BuyProperty = () => {
  return (
    <div className="py-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <div className="flex gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
    </div>
  );
};

export default BuyProperty;
