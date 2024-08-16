import { useLoaderData } from "react-router-dom";
const PropertyImages = () => {
  const { data }: any = useLoaderData();
  const length = data.attributes.images.data.length;
  const image1 =
    data.attributes.images.data[1 % length].attributes.formats.small.url;
  const image2 =
    data.attributes.images.data[2 % length].attributes.formats.small.url;
  const image3 =
    data.attributes.images.data[3 % length].attributes.formats.small.url;
  return (
    <div className="flex gap-4">
      <div className="flex">
        <img
          src={`http://localhost:1337${data.attributes.image.data.attributes.formats.medium.url}`}
          alt="hotel2"
          className="object-cover w-full rounded-l-[1rem] h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={`http://localhost:1337${image1}`}
          alt="hotel2"
          className="object-cover w-full rounded-tr-[1rem]"
        />
        <img
          src={`http://localhost:1337${image2}`}
          alt="hotel2"
          className="object-cover"
        />
        <div className="w-full relative">
          <img
            src={`http://localhost:1337${image3}`}
            alt="hotel4"
            className="w-full object-cover rounded-br-[1rem]"
          />
          {length > 3 ? (
            <div className="bg-white opacity-80 w-full h-full absolute z-[0] rounded-br-[1rem] top-0 right-0 flex justify-center items-center">
              <button className="capitalize text-neutral-800 text-xl tracking-wide">
                +12 photo
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyImages;
