import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BecomeAgent = () => {
  return (
    <div className="align-element flex flex-col sm:flex-row gap-10 justify-between my-20">
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Become a Real Estate Agent
        </h1>
        <p className="text-sm font-light">
          We only work with the best companies around the globe
        </p>
      </div>
      <Link
        to="/"
        className="flex items-center gap-4 btn btn-warning font-normal"
      >
        register now <FaArrowRight />
      </Link>
    </div>
  );
};

export default BecomeAgent;
