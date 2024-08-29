import { useLoaderData } from "react-router-dom";
import ImageWithBlurHash from "../global/ImageWithBlurHash";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const PropertyImages = () => {
  const { data }: any = useLoaderData();
  const propertyAllImages = data.fields.images;
  return (
    <div className="relative carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
      <button className="absolute left-0 my-auto h-full z-[10]">
        <CiCircleChevLeft className="text-5xl text-black" />
      </button>
      {propertyAllImages.map((item: any) => {
        return (
          <div className="carousel-item" key={item.sys.id}>
            <ImageWithBlurHash
              blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              imageUrl={`https:${item.fields.file.url}`}
              alt="image"
              width={800}
              height={800}
            />
          </div>
        );
      })}
      <button className="absolute right-0 z-[10] my-auto h-full">
        <CiCircleChevRight className="text-5xl text-black" />
      </button>
    </div>
  );
};

export default PropertyImages;
