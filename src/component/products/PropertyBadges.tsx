import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";

const PropertyBadges = () => {
  const [favorate, setFavorate] = useState(false);
  const [bookMarked, setBookmarked] = useState(false);
  return (
    <div className="mt-8 flex flex-wrap justify-start md:justify-between gap-4 items-center">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="flex gap-4 items-center text-green-600 font-bold tracking-wider">
          <span className="px-3 py-1 bg-green-200 rounded-lg text-xl font-normal">
            5.0
          </span>
          Perfect
        </h1>
        <div className="flex flex-wrap gap-2 ml-2">
          <div className="badge badge-neutral">Hotels</div>
          <div className="badge badge-error">New Building</div>
          <div className="badge badge-warning">Top Value</div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1 ml-4">
          {Array.from({ length: 5 }, (_, index) => {
            return <FaStar key={index} className="text-xl text-warning" />;
          })}
        </div>
        <button onClick={() => setFavorate(!favorate)}>
          {favorate ? (
            <FaHeart className="text-xl" />
          ) : (
            <FaRegHeart className="text-xl" />
          )}
        </button>
        <button onClick={() => setBookmarked(!bookMarked)}>
          {bookMarked ? (
            <FaBookmark className="text-xl" />
          ) : (
            <FaRegBookmark className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PropertyBadges;
