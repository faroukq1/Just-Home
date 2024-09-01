import { Notice } from "../component";
import image from "../assets/decore2.png";
import meeting from "../assets/meeting.jpg";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";
const Paymentpage = () => {
  const navigation = useNavigate();
  const handleAccept = () => {
    toast.success("Offer has been sended to the client");
    navigation("/properties/1");
  };
  const { data }: any = useLoaderData();
  const date = data.fields.meetingDay.split("T");
  const time = date[1].split("+");
  const address = data.fields.address;

  console.log(data);
  return (
    <div className="py-20 min-h-screen align-element grid gap-8">
      <Notice
        image={image}
        heading="Notice"
        paragraph="    Welcome to our property marketplace! Our website connects buyers and
          sellers, making it easy to find and purchase your dream home or
          investment property. Here's how it works: sellers list their
          properties for sale on our platform, and buyers can browse through a
          wide selection to find the perfect match. When you're ready to move
          forward, we bring you and the seller together in our agency to
          facilitate the transaction. Our role is to ensure a smooth and
          transparent process for both parties. If the deal closes successfully,
          we earn a commission for our services, which comes from the seller as
          part of the final transaction. This way, we ensure that everyone
          benefits from a successful sale, and you, the buyer, can move into
          your new property with confidence. We're here to support you every
          step of the way!"
      />
      <Notice
        image={meeting}
        heading="Our agency"
        paragraph="Welcome to our agency, where buyers and sellers meet to finalize property deals. We offer a simple, private meeting space designed for easy negotiations. Our office is comfortable, with a quiet area for discussions and finalizing details. 
        We provide everything needed for the transaction, ensuring a smooth process for both parties. With our professional setting, we help make property deals happen quickly and efficiently."
        reverse
      />

      <div className="flex justify-between">
        <h3>
          <span className="btn btn-neutral mr-4 pointer-events-none">
            Address
          </span>
          {address}
        </h3>
        <h3 className="flex">
          <span className="btn btn-neutral mr-4 pointer-events-none">Time</span>{" "}
          <div className="grid grid-cols-2 gap-x-4">
            <span>data : {date[0]}</span>
            <span>time : {time[0]}</span>
            <span>time zone : {time[1]}</span>
          </div>
        </h3>
        <button onClick={handleAccept} className="btn btn-error text-neutral">
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Paymentpage;
