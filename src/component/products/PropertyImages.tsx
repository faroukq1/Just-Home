import hotel1 from "../../assets/modernhotelroom.jpg";
import hotel2 from "../../assets/modernhotelroom2.jpg";
import hotel3 from "../../assets/modernhotel3.webp";
import hotel4 from "../../assets/modernhotel4.webp";
const PropertyImages = () => {
  return (
    <div className="flex gap-4 h-[46%]">
      <div className="flex-1">
        <img
          src={hotel1}
          alt="hotel2"
          className="object-cover w-full h-full rounded-l-[3rem]"
        />
      </div>
      <div style={{ flexGrow: "0.15" }} className="flex flex-col gap-2 h-full">
        <img
          src={hotel2}
          alt="hotel2"
          className="object-cover w-full h-1/3 rounded-tr-[3rem]"
        />
        <img src={hotel3} alt="hotel2" className="object-cover  h-1/3" />
        <div className="w-full h-1/3 relative">
          <img
            src={hotel4}
            alt="hotel4"
            className="w-full h-full object-cover rounded-br-[3rem]"
          />
          <div className="bg-white opacity-80 w-full h-full absolute z-[10] rounded-br-[3rem] top-0 right-0 flex justify-center items-center">
            <p className="capitalize text-neutral-800 text-xl tracking-wide">
              +12 photo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyImages;
