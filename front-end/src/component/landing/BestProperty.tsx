import PrintTitle from "../global/PrintTitle";
import decore from "../../assets/decore.png";
import decore2 from "../../assets/decore2.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const BestProperty = () => {
  const { data }: any = useLoaderData();
  const number = Math.floor(Math.random() * data.length);
  const id = data[number].id;
  const image =
    data[number].attributes.image.data.attributes.formats.medium.url;
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
              <h1 className="text-white text-4xl font-bold">
                {data.length - 1}+
              </h1>
              <p className="text-white font-semibold">property</p>
              <p className="text-sm mt-4 text-neutral-400">
                Explore our wide variety of properties to fid your dream home
                today.
              </p>
              <Link
                to="/properties"
                className="bg-white rounded-full w-fit p-3 absolute bottom-4 right-6"
              >
                <FaArrowRight className="text-xl" />
              </Link>
            </div>
            <div className="flex-1">
              <img src={decore2} alt="decore2" className="h-full" />
            </div>
          </div>
        </div>
        <Link to={`/property/${id}`} className="w-full ">
          <img
            className="h-full w-[100%] object-conver rounded-md"
            src={`http://localhost:1337${image}`}
            alt="villa"
          />
        </Link>
      </div>
    </div>
  );
};

export default BestProperty;
