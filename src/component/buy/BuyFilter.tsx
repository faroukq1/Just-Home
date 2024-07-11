import {
  CustomInputNumber,
  FilterHeader,
  ProperyTypeFilter,
  RentPeriod,
  RoomFilter,
} from "../../component";

const BuyFilter = () => {
  return (
    <aside className="py-4">
      <FilterHeader />
      <ProperyTypeFilter />
      <div className="flex gap-4 mt-4">
        <CustomInputNumber title="Min Price" />
        <CustomInputNumber title="Max Price" />
      </div>
      <RoomFilter />
      <RentPeriod />
    </aside>
  );
};

export default BuyFilter;
