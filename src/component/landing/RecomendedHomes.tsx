import { useLoaderData } from "react-router-dom";
import PrintTitle from "../global/PrintTitle";
import PropertyCard from "../global/PropertyCard";

const RecomendedHomes = () => {
  const { data }: any = useLoaderData();
  const RecomendedHomesList = data.filter(
    (item: any) => item.attributes.featured
  );

  return (
    <div className="bg-base-100 align-element my-28">
      <PrintTitle title="homes for you" subTitle="Based on your view history" />
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {RecomendedHomesList.map((item: any) => {
          const cardData = {
            id: item.id,
            title: item.attributes.title,
            price: item.attributes.price,
            address: item.attributes.address,
            sold: item.attributes.sold,
            description: item.attributes.description,
            image: item.attributes.image.data.attributes.formats.medium.url,
            images: item.attributes.images.data,
            features: item.attributes.features.features,
          };
          return <PropertyCard {...cardData} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default RecomendedHomes;
