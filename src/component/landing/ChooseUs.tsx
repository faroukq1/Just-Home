import PrintTitle from "../global/PrintTitle";
import homelogo from "../../assets/homelogo.png";
import homeandman from "../../assets/homeandman.png";
import homemoney from "../../assets/homemoney.png";
import homeprice from "../../assets/homeprice.png";
import SmallCard from "./SmallCard";
type smallCardContentType = {
  id: number;
  logo: string;
  title: string;
  subtitle: string;
};
const smallCardContent: smallCardContentType[] = [
  {
    id: 1,
    logo: homelogo,
    title: "find your future home",
    subtitle:
      "we help you find a new homeo by offering a small real estate experience",
  },
  {
    id: 2,
    logo: homeandman,
    title: "experienced agents",
    subtitle: "Find an experienced agent who knows your market best ",
  },
  {
    id: 3,
    logo: homemoney,
    title: "Buy or rent homes",
    subtitle: "Millions of houses and apartments in your favourite cities",
  },
  {
    id: 4,
    logo: homeprice,
    title: "List your own property",
    subtitle: "Sign up now and sell or rent your own properties",
  },
];

const ChooseUs = () => {
  return (
    <div
      style={{ backgroundColor: "#E7C873" }}
      className="min-h-[50vh] rounded-lg mx-4 flex flex-col justify-evenly items-center"
    >
      <PrintTitle
        title="why choose us"
        subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, delectus."
      />
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 align-element mb-10">
        {smallCardContent.map((item) => {
          return <SmallCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
