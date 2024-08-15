import { Form } from "react-router-dom";
import {
  CustomInputNumber,
  FilterHeader,
  ProperyTypeFilter,
} from "../../component";
const BuyFilter = () => {
  return (
    <aside className="py-2 hidden xl:block">
      <Form>
        <FilterHeader />
        <ProperyTypeFilter
          type="checkbox"
          name="category"
          label="Property Type"
        />
        <div className="flex gap-4 mt-4">
          <CustomInputNumber
            name="minPrice"
            title="Min Price"
            max={3000}
            min={0}
            defautValue={0}
          />
          <CustomInputNumber
            name="maxPrice"
            title="Max Price"
            max={10000000}
            min={0}
            defautValue={1000000}
          />
        </div>
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
