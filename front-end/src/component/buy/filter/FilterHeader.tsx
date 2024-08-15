import { useNavigate } from "react-router-dom";

const FilterHeader = () => {
  const navigate = useNavigate();
  const handleFilter = () => {
    navigate("/properties");
  };
  return (
    <div className="pb-1 flex items-center justify-between gap-8 border-b border-b-neutral-300">
      <h1 className="text-lg font-normal tracking-wider">filter</h1>
      <button
        onClick={handleFilter}
        className="btn btn-ghost text-neutral-400 capitalize font-xl font-semibold tracking-wider"
      >
        reset filters
      </button>
    </div>
  );
};

export default FilterHeader;
