import { useLoaderData } from "react-router-dom";
import PrintTitle from "../global/PrintTitle";
import PropertyCard from "../global/PropertyCard";

const RecomendedHomes = () => {
  const { data }: any = useLoaderData();
  const RecomendedHomesList = data.filter(
    (item: any) => item.attributes.featured
  );

  console.log(data);
  return (
    <div className="bg-base-100 align-element my-28">
      <PrintTitle title="homes for you" subTitle="Based on your view history" />
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {RecomendedHomesList.map((item: any, index: number) => {
          const image =
            item.attributes.image.data.attributes.formats.medium.url;
          const {
            title,
            price,
            address,
            sold,
          }: {
            title: string;
            price: number;
            address: string;
            image: string;
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
