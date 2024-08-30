import { useLoaderData } from "react-router-dom";
import ImageWithBlurHash from "../global/ImageWithBlurHash";

const PropertyImages = () => {
  const { data }: any = useLoaderData();
  const propertyAllImages = data.fields.images;

  return (
    <div className="relative carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
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
    </div>
  );
};

export default PropertyImages;
