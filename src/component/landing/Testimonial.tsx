import { Link } from "react-router-dom";
import rentingpic from "../../assets/rentingpic.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { achievement } from "../../util/landingData";

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: "#1F4B43" }}>
      {/* PICUTRE SECTION*/}
      <div className="lg:flex lg:items-center gap-7 py-10 align-element">
        <div className="lg:flex-1">
          <img
            src={rentingpic}
            alt="renting picture"
            className="hidden lg:flex h-[500px] rounded-2xl object-fill mt-20"
          />
        </div>
        {/* DESCRIPTION SECTION*/}
        <div className="flex-1">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <h1 className="text-xl text-neutral-50 lg:text-4xl font-semibold text-center">
              Local expertise for luxury homes
            </h1>
            <p className="text-white text-sm leading-8 my-6 text-center">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
              Mi mauris nulla ac dictum ut mauris non.
            </p>
            <Link
              to="/"
              className="flex justify-center items-center gap-2 btn btn-warning text-neutral-50 text-lg font-normal w-fit"
            >
              learn more
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION*/}
      <div className="grid grid-cols-1 items-center gap-16 sm:grid-cols-2 md:grid-cols-4 p-8 mt-4 align-element">
        {achievement.map(({ id, title, subtitle }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center justify-between gap-2 h-full"
            >
              <h1
                style={{ color: "#E7C873" }}
                className="text-5xl font-bold text-center"
              >
                {title}
              </h1>
              <p className="text-sm text-neutral-50 font-light text-center">
                {subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
