import { useLoaderData } from "react-router-dom";
import customFetch from "../../util/customFetch";
import PrintTitle from "../global/PrintTitle";
import PropertyCard from "../global/PropertyCard";

export const loader = async () => {
  const url = "api/properties?filters[featured[$eq]=true&populate=images";
  const response = await customFetch(url);
  const data = response.data.data;
  return { data };
};

const RecomendedHomes = () => {
  const { data }: any = useLoaderData();
  return (
    <div className="bg-base-100 align-element my-28">
      <PrintTitle title="homes for you" subTitle="Based on your view history" />
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {data.map((item: any, index: number) => {
          const image: string =
            data[0].attributes.images.data[0].attributes.url;
          console.log(image);
          const {
            title,
            price,
            address,
            sold,
          }: {
            title: string;
            price: number;
            address: string;
            sold: boolean;
          } = item.attributes;
          return (
            <PropertyCard
              title={title}
              price={price}
              address={address}
              sold={sold}
              image={image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecomendedHomes;
