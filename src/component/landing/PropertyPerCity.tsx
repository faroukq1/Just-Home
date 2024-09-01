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

      <div className="grid grid-cols-7 grid-rows-6 gap-2">
        <Link
          to={`property/${img1.id}`}
          className="col-start-6 col-end-8 row-start-1 row-end-4"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img1.image}
            alt="new york"
          />
        </Link>
        <Link
          to={`property/${img2.id}`}
          className="col-start-4 col-end-6 row-start-1 row-end-4"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img2.image}
            alt="sandiego"
          />
        </Link>
        <Link
          to={`property/${img3.id}`}
          className="col-start-3 col-end-5 row-start-4 row-end-7"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img3.image}
            alt="florida"
          />
        </Link>
        <Link
          to={`property/${img4.id}`}
          className="col-start-1 col-end-3 row-start-4 row-end-7"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img4.image}
            alt="losangeles"
          />
        </Link>
        <Link
          to={`property/${img5.id}`}
          className="col-start-1 col-end-4 row-start-1 row-end-4"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img5.image}
            alt="miami"
          />
        </Link>
        <Link
          to={`property/${img6.id}`}
          className="col-start-5 col-end-8 row-start-4 row-end-7"
        >
          <img
            className="w-full h-full rounded-md object-cover"
            src={img6.image}
            alt="chicago"
          />
        </Link>
      </div>
    </div>
  );
};

export default PropertyPerCity;
