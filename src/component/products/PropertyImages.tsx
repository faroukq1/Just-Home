import { useLoaderData } from "react-router-dom";
import ImageWithBlurHash from "../global/ImageWithBlurHash";

const PropertyImages = () => {
  const { data }: any = useLoaderData();
  const propertyAllImages = data.fields.images;
  return (
    <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
      {propertyAllImages.map((item: any) => {
        return (
          <div className="carousel-item" key={item.sys.id}>
            <ImageWithBlurHash
              blurhash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              imageUrl={`https:${item.fields.file.url}`}
              alt="image"
              width={400}
              height={400}
            />
            {/* <img
              src={`https:${item.fields.file.url}`}
              alt="aa"
              className="rounded-box w-96 h-96"
              loading="lazy"
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default PropertyImages;
