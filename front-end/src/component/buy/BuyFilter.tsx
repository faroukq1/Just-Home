import { Form } from "react-router-dom";
import {
  CustomInputNumber,
  FilterHeader,
  ProperyTypeFilter,
  RentPeriod,
  RoomFilter,
} from "../../component";
const room: string[] = ["1", "2", "3", "4", "5"];
const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <Form>
        <FilterHeader />
        <ProperyTypeFilter
          type="search"
          name="category"
          label="Property Type"
        />
        <div className="flex gap-4 mt-4">
          <CustomInputNumber name="min" title="Min Price" max={3000} min={0} />
          <CustomInputNumber name="max" title="Max Price" max={3000} min={0} />
        </div>
        <RoomFilter type="search" name="room" data={room} />
        <RentPeriod />
        <button
          type="submit"
          className="mt-4 btn btn-success btn-wide text-white text-2xl font-normal tracking-wide capitalize"
        >
          filter
        </button>
      </Form>
    </aside>
  );
};

export default BuyFilter;
