import image from "../../assets/hero.png";

import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex flex-col items-center"
    >
      <div className="absolute w-[210.38px] h-[40px] top-[255px] border border-white rounded-full flex justify-center items-center">
        <h1 className="text-[13px] text-white">LET US GUIDE YOUR HOME</h1>
      </div>
      <h1 className="capitalize absolute h-[156px] top-[350px] text-center text-white font-bold text-4xl">
        discover a place you'll <br />
        love to live
      </h1>
      <div className="absolute top-[50%] w-full flex justify-center gap-4">
        <button
          type="button"
          className="btn btn-ghost border-b-1 border-b-white rounded-sm text-white"
        >
          sale
        </button>
        <button type="button" className="btn btn-ghost text-white">
          rent
        </button>
      </div>
      <label className="absolute top-[60%] w-[50%] input input-bordered flex items-center gap-2 rounded-full">
        <input
          type="text"
          className="grow placeholder:text-neutral-500 text-[12px]"
          placeholder="Enter Name, Keyword..."
        />
        <CiSearch className="text-2xl rounded-full" />
      </label>
    </div>
  );
};

export default Hero;
