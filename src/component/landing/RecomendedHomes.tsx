import { useLoaderData } from "react-router-dom";
import PrintTitle from "../global/PrintTitle";
import PropertyCard from "../global/PropertyCard";

const RecomendedHomes = () => {
  const { specialHomes }: any = useLoaderData();

  return (
    <div className="bg-base-100 align-element my-28">
      <PrintTitle title="homes for you" subTitle="Based on your view history" />
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {specialHomes.map((item: any) => {
          const cardData = {
            id: item.sys.id,
            title: item.fields.title,
            price: item.fields.price,
            address: item.fields.address,
            sold: item.fields.sold,
            description: item.fields.description,
            image: item.fields.image.fields.file.url,
            images: item.fields.images,
            features: item.fields.features,
          };
          return <PropertyCard {...cardData} key={item.sys.id} />;
        })}
      </div>
    </div>
  );
};

export default RecomendedHomes;
