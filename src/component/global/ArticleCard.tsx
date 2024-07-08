import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

type ArticleCardType = {
  image: string;
  propertyType: string;
  date: string;
  heading: string;
};

const ArticleCard = ({
  image,
  propertyType,
  date,
  heading,
}: ArticleCardType) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-md">
      <figure>
        <img src={image} />
      </figure>
      <div className="p-4 flex flex-col gap-4">
        <p className="font-light text-neutral-500">
          {propertyType} <span> . </span> {date}
        </p>
        <h2 className="text-lg font-semibold">{heading}</h2>
      </div>
      <Link to="/" className="flex gap-4 btn btn-ghost ">
        read more{" "}
        <span>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default ArticleCard;
