import {
  Link,
  LoaderFunction,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";
import { createClient } from "contentful";

export const loader: LoaderFunction = async ({ params, request }) => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });
  const nextItems = parseInt(params.page as string) - 1;
  const url = new URL(request.url);
  const selectedCategories = url.searchParams.getAll("category");
  // fetching categories
  const fetchCategories = await client.getEntries({
    content_type: "category",
  });

  // fetching properties
  const fetchProperties = await client.getEntries({
    content_type: "justHomeContent",
    limit: 6,
    skip: nextItems * 6,
    "fields.propertyCategory.sys.id[in]": selectedCategories.join(","),
  });

  const categories = fetchCategories.items;
  const totalItem = fetchProperties.total;
  const data = fetchProperties.items;

  return { data, totalItem, categories };
};

const BuyProperty = () => {
  const { page } = useParams();
  const currentPage = parseInt(page as string) || 0;
  const { totalItem }: any = useLoaderData();
  const maxPaginationNumber = Math.ceil(totalItem / 6);
  const nextPage =
    currentPage < maxPaginationNumber ? currentPage + 1 : maxPaginationNumber;
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  return (
    <div className="py-20 min-h-screen mx-auto px-8 max-w-screen-2xl">
      <BuySearchBar />
      <div className="flex gap-4">
        <BuyFilter />
        <PropertyMarketPlace />
      </div>
      <div className="mt-8 join flex justify-end gap-1">
        <Link
          to={`/properties/${previousPage}`}
          className={`join-item btn btn-outline ${
            currentPage === 1 && "hidden"
          }`}
        >
          Previous page
        </Link>
        <button className="join-item btn btn-neutral pointer-events-none">
          {currentPage}
        </button>
        <Link
          to={`/properties/${currentPage + 1}`}
          className={`join-item btn btn-outline ${
            currentPage === maxPaginationNumber && "hidden"
          }`}
        >
          {currentPage + 1}
        </Link>
        <Link
          to={`/properties/${nextPage}`}
          className={`join-item btn btn-outline ${
            currentPage === maxPaginationNumber && "hidden"
          }`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default BuyProperty;
