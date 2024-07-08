import { Link } from "react-router-dom";
import rentingpic from "../../assets/rentingpic.jpg";
import { FaArrowRight } from "react-icons/fa6";

type achievementType = {
  id: number;
  title: string;
  subtitle: string;
};
const achievement: achievementType[] = [
  {
    id: 1,
    title: "$18M",
    subtitle: "Owned from properties transactions",
  },
  {
    id: 2,
    title: "26k",
    subtitle: "properties for buy",
  },
  {
    id: 3,
    title: "15k",
    subtitle: "propreties for sell",
  },
  {
    id: 4,
    title: "800",
    subtitle: "daily completed transactions.",
  },
];

const Testimonial = () => {
  return (
    <div
      style={{ backgroundColor: "#1F4B43" }}
      className="custom-vh mx-4 my-10 rounded-3xl flex flex-col gap-20 py-30 px-40"
    >
      {/* PICUTRE SECTION*/}
      <div className="flex gap-32 align-element">
        <div className="flex-1">
          <img
            src={rentingpic}
            alt="renting picture"
            className="h-[500px] rounded-2xl object-fill mt-20"
          />
        </div>
        {/* DESCRIPTION SECTION*/}
        <div className="flex-1 flex justify-between items-center">
          <div>
            <h1 className="text-neutral-50 text-4xl font-semibold">
              Local expertise for luxury homes
            </h1>
            <p className="text-white text-sm leading-8 my-6">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
              Mi mauris nulla ac dictum ut mauris non.
            </p>
            <Link
              to="/"
              className="flex items-center gap-2 btn btn-warning text-neutral-50 text-lg font-normal w-fit mt-8"
            >
              learn more
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION*/}
      <div className="flex justify-between items-center p-8 mt-4">
        {achievement.map(({ id, title, subtitle }: achievementType) => {
          return (
            <div key={id}>
              <h1
                style={{ color: "#E7C873" }}
                className="text-5xl font-bold text-center mb-4"
              >
                {title}
              </h1>
              <p className="text-sm text-neutral-50 font-light">{subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
