import { IoIosSearch } from "react-icons/io";
import SmallScreenFilter from "./SmallScreenFilter";

const BuySearchBar = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 mb-2">
      <div className="flex items-center gap-2 w-full">
        <label className="input input-bordered flex flex-row-reverse items-center gap-3 w-full">
          <input
            name="name"
            type="search"
            placeholder="Search for property..."
            className="grow"
          />
          <IoIosSearch className="text-2xl" />
        </label>
        <SmallScreenFilter />
      </div>
      <div className="w-full flex justify-between xl:w-fit items-center gap-2">
        <button
          type="button"
          className="w-full btn btn-neutral capitalize text-white"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default BuySearchBar;
