import { Link } from "react-router-dom";
import travel1 from "../../assets/travel1.jpg";
import travel2 from "../../assets/travel2.webp";
import travel3 from "../../assets/travel3.jpeg";
import travel4 from "../../assets/travel4.webp";
const ArticleBlogCard = ({ reverse }: { reverse?: boolean }) => {
  return (
    <>
      <div className={`flex gap-4 px-4 h-80 ${reverse && "flex-row-reverse"}`}>
        <div className="relative w-[65%]">
          <Link to="/article/1">
            <img
              className="object-cover rounded-lg h-full w-full"
              src={travel1}
              alt="travel1"
            />
          </Link>
          <p className="absolute top-10 left-10 text-lg text-neutral-200 font-bold">
            <span className="text-neutral-300 font-normal">Distination</span>{" "}
            <br />
            Best Guild to travel to Morocco
          </p>
        </div>
        <div className="relative w-[35%]">
          <Link to="/article/2">
            <img
              className="object-cover rounded-lg h-full w-full"
              src={travel2}
              alt="travel2"
            />
          </Link>
          <p className="absolute top-10 left-10 text-lg text-neutral-200 font-bold">
            <span className="text-neutral-300 font-normal">Distination</span>
            <br />
            Best Mountain Places to travel
          </p>
        </div>
      </div>

      <div className="flex gap-4 px-4 mt-4 h-80">
        <div className="relative">
          <Link to="/article/3">
            <img
              className="object-cover rounded-lg h-full w-full"
              src={travel4}
              alt="travel1"
            />
          </Link>
          <p className="absolute top-10 left-10 text-lg text-neutral-200 font-bold">
            <span className="text-neutral-300 font-normal">Distination</span>{" "}
            <br />
            Best Guild to travel to Morocco
          </p>
        </div>

        <div className="relative">
          <Link to="/article/4">
            <img
              className="object-cover rounded-lg h-full w-full"
              src={travel2}
              alt="travel1"
            />
          </Link>
          <p className="absolute top-10 left-10 text-lg text-neutral-200 font-bold">
            <span className="text-neutral-300 font-normal">Distination</span>{" "}
            <br />
            Best Guild to travel to Morocco
          </p>
        </div>
        <div className="relative">
          <Link to="/article/5">
            <img
              className="object-cover rounded-lg h-full w-full"
              src={travel3}
              alt="travel1"
            />
          </Link>
          <p className="absolute top-10 left-10 text-lg text-neutral-200 font-bold">
            <span className="text-neutral-300 font-normal">Distination</span>{" "}
            <br />
            Best Guild to travel to Morocco
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleBlogCard;
