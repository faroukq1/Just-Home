import { IoMdDownload } from "react-icons/io";

const PropertyPicutres = () => {
  return (
    <div className="flex flex-col justify-center items-center carousel-item w-full">
      <div className="w-10/12 h-full flex flex-col items-center justify-center border-2 border-dotted rounded-md border-red-700">
        <IoMdDownload className="text-[250px] text-neutral-content" />
        <input type="file" multiple className="ml-20" />
      </div>
    </div>
  );
};

export default PropertyPicutres;
