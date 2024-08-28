import { smallCardContent } from "../../util/landingData";
import PrintTitle from "../global/PrintTitle";
import SmallCard from "./SmallCard";

const ChooseUs = () => {
  return (
    <div
      // style={{ backgroundColor: "#E7C873" }}
      className="bg-neutral min-h-[50vh] rounded-lg mx-4 flex flex-col justify-evenly items-center"
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
