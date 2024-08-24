import { Form, LoaderFunction } from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import customFetch from "../util/customFetch";
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const param: Record<string, string> = Object.fromEntries(searchParams);
  console.log(param);
  const [res1, res2] = await Promise.all([
    customFetch("/api/properties", {
      params: {
        filters: {
          title: {
            $startsWith: param.name,
          },
          category: {
            name: {
              $eq: param.category,
            },
          },
          price: {
            $gte: param.minPrice,
            $lte: param.maxPrice,
          },
        },
        populate: {
          image: "*",
          images: "*",
          category: "*",
        },
      },
    }),
    customFetch("/api/categories"),
  ]);
  const data = res1.data.data;
  const categories = res2.data.data;
  return { categories, data };
};

const BuyProperty = () => {
  return (
    <Form>
      <div className="py-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
        <BuySearchBar />
        <div className="flex gap-4">
          <BuyFilter />
          <PropertyMarketPlace />
        </div>
      </div>
    </Form>
  );
};

export default BuyProperty;
