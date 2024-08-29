import { createClient } from "contentful";
import { LoaderFunction } from "react-router-dom";
export const BuyPropertyLoader: LoaderFunction = async ({
  params,
  request,
}) => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });
  const nextItems = parseInt(params.page as string) - 1;
  const url = new URL(request.url);
  const selectedCategories = url.searchParams.getAll("category");
  const minPrice = url.searchParams.getAll("minPrice");
  // fetching categories
  const fetchCategories = await client.getEntries({
    content_type: "category",
  });
  // fetching properties
  const fetchProperties = await client.getEntries({
    content_type: "justHomeContent",
    limit: 6,
    skip: nextItems * 6,
    // filter based on category's id
    ...(selectedCategories.length > 0 && {
      "fields.propertyCategory.sys.id[in]": selectedCategories.join(","),
    }),
    // filter based on price range (get all element greater than or equal minPrice)
    ...(minPrice.length > 0 && {
      "fields.price[gte]": minPrice,
    }),
  });

  const categories = fetchCategories.items;
  const totalItem = fetchProperties.total;
  const data = fetchProperties.items;
  return { data, totalItem, categories };
};
