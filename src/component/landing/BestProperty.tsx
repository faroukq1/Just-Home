import PrintTitle from "../global/PrintTitle";
import decore from "../../assets/decore.png";
import decore2 from "../../assets/decore2.png";
import villa from "../../assets/villa.png";
import { FaArrowRight } from "react-icons/fa6";

const BestProperty = () => {
  return (
    <div className="align-element my-20">
      <PrintTitle
        title="best property"
        subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, amet!"
      />
      <div className="flex flex-wrap-reverse md:flex-nowrap gap-4 mt-20">
        <div className="flex flex-col gap-4">
          <img src={decore} alt="decore" className="w-full h-[50%]" />
          <div className="flex flex-col md:flex-row gap-4 rounded-lg flex-1">
            <div className="relative bg-black p-10 flex-1 rounded-lg">
              <h1 className="text-white text-4xl font-bold">280+</h1>
              <p className="text-white font-semibold">property</p>
              <p className="text-sm mt-4 text-neutral-400">
                Explore our wide variety of properties to fid your dream home
                today
              </p>
              <div className="bg-white rounded-full w-fit p-3 absolute bottom-6 right-6">
                <FaArrowRight className="text-xl" />
              </div>
            </div>
            <div className="flex-1">
              <img src={decore2} alt="decore2" className="h-full" />
            </div>
          </div>
        </div>
        <img src={villa} alt="villa" className="w-[100%] md:w-[50%]" />
      </div>
    </div>
  );
};

export default BestProperty;
