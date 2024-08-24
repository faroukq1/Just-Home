import { AiFillStar } from "react-icons/ai";
import avatar from "../../assets/johndoe.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row align-element my-20 border-b border-b-neutral-200 pb-10">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold leading-6 mb-8">
          what our customers are <br />
          <br />
          saying us?
        </h1>
        <p className="font-light leading-6 mb-8">
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose injected humour and the like.
        </p>
        <div className="flex gap-12">
          <div>
            <h1 className="text-3xl">10m+</h1>
            <p className="text-sm">Happy People</p>
          </div>
          <div>
            <h1 className="text-3xl mb-1">4.88</h1>
            <p className="text-sm mb-1">Overall rating</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => {
                return <AiFillStar className="text-yellow-300" key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:p-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="avatar picture"
              className="h-16 w-16 rounded-full"
            />

            <h3 className="flex flex-col font-semibold">
              Cameron Williamson{" "}
              <span className="text-sm font-normal text-neutral-500">
                Designer
              </span>
            </h3>
          </div>
          <FaQuoteLeft className="text-5xl" />
        </div>
        <p className="mt-4 font-semibold leading-8">
          Searches for multiplexes, property comparisons, and the loan
          estimator. Works great. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.
        </p>
      </div>
    </div>
  );
};

export default Review;
