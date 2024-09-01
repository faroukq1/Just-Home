import PrintTitle from "../global/PrintTitle";
import { Link, useLoaderData } from "react-router-dom";
const PropertyPerCity = () => {
  const { data }: any = useLoaderData();
  const propertyPerCityData = data
    .map((item: any) => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;
      return {
        id,
        image,
      };
    })
    .slice(0, 6);
  const [img1, img2, img3, img4, img5, img6] = propertyPerCityData;
  return (
    <div className="align-element mb-20">
      <PrintTitle
        title="find properties in these cities"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus?"
      />
      <div className="flex flex-col justify-center items-center lg:flex-row gap-2">
        <div className="flex flex-wrap flex-col sm:flex-nowrap">
          <Link className="relative" to={`property/${img1.id}`}>
            <img
              className="w-full h-60 rounded-md object-cover"
              src={img1.image}
              alt="new york"
            />
          </Link>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 my-2">
            <Link className="relative" to={`property/${img2.id}`}>
              <img
                className="w-full sm:w-60 rounded-md object-cover"
                src={img2.image}
                alt="sandiego"
              />
            </Link>
            <Link className="relative" to={`property/${img3.id}`}>
              <img
                className="w-full sm:w-60 rounded-md object-cover"
                src={img3.image}
                alt="florida"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <Link className="relative" to={`property/${img4.id}`}>
              <img
                className="w-full sm:w-60 rounded-md object-cover"
                src={img4.image}
                alt="losangeles"
              />
            </Link>
            <Link className="relative" to={`property/${img5.id}`}>
              <img
                className="w-full sm:w-60 rounded-md object-cover h-full"
                src={img5.image}
                alt="miami"
              />
            </Link>
          </div>
          <Link className="relative" to={`property/${img6.id}`}>
            <img
              className="w-full h-60 rounded-md object-cover"
              src={img6.image}
              alt="chicago"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyPerCity;
