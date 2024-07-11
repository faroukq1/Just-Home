import { IoIosSearch } from "react-icons/io";

const BuySearchBar = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 mb-2">
      <label className="input input-bordered flex flex-row-reverse items-center gap-3 w-full">
        <input
          type="text"
          placeholder="Search for property..."
          className="grow"
        />
        <IoIosSearch className="text-2xl" />
      </label>
      <button
        type="button"
        className="flex-1 min-w-40 btn btn-success btn-wide capitalize text-white"
      >
        search
      </button>
    </div>
  );
};

export default BuySearchBar;
