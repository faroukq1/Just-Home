import {
  CustomInputNumber,
  FilterHeader,
  ProperyTypeFilter,
  RentPeriod,
  RoomFilter,
} from "../../component";

const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <FilterHeader />
      <ProperyTypeFilter />
      <div className="flex gap-4 mt-4">
        <CustomInputNumber title="Min Price" />
        <CustomInputNumber title="Max Price" />
      </div>
      <RoomFilter />
      <RentPeriod />
      <button
        type="button"
        className="mt-4 btn btn-success btn-wide text-white text-2xl font-normal tracking-wide capitalize"
      >
        filter
      </button>
    </aside>
  );
};

export default BuyFilter;
