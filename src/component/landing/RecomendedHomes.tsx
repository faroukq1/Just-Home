import PrintTitle from "../global/PrintTitle";
import PropertyCard from "../global/PropertyCard";

const RecomendedHomes = () => {
  return (
    <div className="bg-base-100 align-element my-28">
      <PrintTitle title="homes for you" subTitle="Based on your view history" />
      <div className="flex gap-4 flex-wrap justify-center md:flex-nowrap">
        {Array.from({ length: 3 }, (_, index) => {
          return <PropertyCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default RecomendedHomes;
