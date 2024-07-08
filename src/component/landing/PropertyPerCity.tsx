import PrintTitle from "../global/PrintTitle";
import newYork from "../../assets/newyork.png";
import sandiego from "../../assets/sandiego.png";
import florida from "../../assets/florida.png";
import chicago from "../../assets/chicago.png";
import losangeles from "../../assets/losangeles.png";
import miami from "../../assets/miami.png";
const PropertyPerCity = () => {
  return (
    <div className="align-element mb-20">
      <PrintTitle
        title="find properties in these cities"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus?"
      />
      <div className="flex flex-col justify-center items-center lg:flex-row gap-2">
        <div className="flex flex-wrap flex-col sm:flex-nowrap">
          <img className="w-full h-60" src={newYork} alt="new york" />
          <div className="flex flex-wrap sm:flex-nowrap gap-2 my-2">
            <img className="w-full sm:w-60" src={sandiego} alt="sandiego" />
            <img className="w-full sm:w-60" src={florida} alt="florida" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <img className="w-full sm:w-60" src={losangeles} alt="losangeles" />
            <img className="w-full sm:w-60" src={miami} alt="miami" />
          </div>
          <img className="w-full h-60" src={chicago} alt="chicago" />
        </div>
      </div>
    </div>
  );
};

export default PropertyPerCity;
