import { useLoaderData } from "react-router-dom";

const PropertyImages = () => {
  const { data }: any = useLoaderData();
  const propertyAllImages = data.fields.images;

  return (
    <div className="relative carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
      {propertyAllImages.map((item: any) => {
        return (
          <div className="carousel-item" key={item.sys.id}>
            <img
              src={`https:${item.fields.file.url}`}
              alt="carossel item"
              className="w-[800px] h-[600px] rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PropertyImages;
