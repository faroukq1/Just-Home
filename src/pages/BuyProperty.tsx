import { Link, useLoaderData, useParams } from "react-router-dom";
import { BuyFilter, BuySearchBar, PropertyMarketPlace } from "../component";

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
