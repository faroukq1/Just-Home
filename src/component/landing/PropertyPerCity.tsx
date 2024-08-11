import PrintTitle from "../global/PrintTitle";
import newYork from "../../assets/newyork.png";
import sandiego from "../../assets/sandiego.png";
import florida from "../../assets/florida.png";
import chicago from "../../assets/chicago.png";
import losangeles from "../../assets/losangeles.png";
import miami from "../../assets/miami.png";
import { Link, useLoaderData } from "react-router-dom";
const PropertyPerCity = () => {
  const { data }: any = useLoaderData();
  const propertyCityData = data
    .map((item: any, index: number) => {
      if (index == 6) return;
      const id = item.id;
      const country = item.attributes.country;
      const image = `http://localhost:1337${item.attributes.image.data.attributes.formats.medium.url}`;
      return {
        id,
        country,
        image,
      };
    })
    .slice(0, 6);
  const [image1, image2, image3, image4, image5, image6] = propertyCityData;
  return (
    <div className="align-element mb-20">
      <PrintTitle
        title="find properties in these cities"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus?"
      />
      <div className="flex flex-col justify-center items-center lg:flex-row gap-2">
        <div className="flex flex-wrap flex-col sm:flex-nowrap">
          <Link className="relative" to={`property/${image1.id}`}>
            <h3 className="absolute top-4 left-4 z-20 font-bold text-lg ">
              {image1.country}
            </h3>
            <img
              className="w-full h-60 rounded-md object-cover"
              src={image1.image}
              alt="new york"
            />
          </Link>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 my-2">
            <Link className="relative" to={`property/${image1.id}`}>
              <h3 className="absolute top-4 left-4 z-20 font-bold text-lg ">
                {image2.country}
              </h3>
              <img
                className="w-full h-full sm:w-60 rounded-md object-cover"
                src={image2.image}
                alt="sandiego"
              />
            </Link>
            <Link className="relative" to={`property/${image3.id}`}>
              <h3 className="absolute top-4 left-4 z-20 font-bold text-lg ">
                {image3.country}
              </h3>
              <img
                className="w-full h-full sm:w-60 rounded-md object-cover"
                src={image3.image}
                alt="florida"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <Link className="relative" to={`property/${image4.id}`}>
              <h3 className="absolute top-4 left-4 z-20 font-bold text-lg ">
                {image4.country}
              </h3>
              <img
                className="w-full h-full sm:w-60 rounded-md object-cover"
                src={image4.image}
                alt="losangeles"
              />
            </Link>
            <Link className="relative" to={`property/${image5.id}`}>
              <h3 className="absolute top-4 left-4 z-20 font-bold text-lg ">
                {image5.country}
              </h3>
              <img
                className="w-full sm:w-60 rounded-md object-cover"
                src={image5.image}
                alt="miami"
              />
            </Link>
          </div>
          <Link className="relative" to={`property/${image6.id}`}>
            <h3 className="top-4 left-4 absolute z-20 font-bold text-lg ">
              {image6.country}
            </h3>
            <img
              className="w-full h-60 rounded-md object-cover"
              src={image6.image}
              alt="chicago"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyPerCity;
