import image from "../../assets/decore2.png";

const Notice = () => {
  return (
    <div className="bg-neutral p-10 rounded-lg flex items-center gap-8">
      <img src={image} alt="image" className="w-96" />
      <div className="grid gap-4">
        <h1 className="text-3xl btn btn-wide">Notice</h1>
        <p className="font-bold leading-8 tracking-wide text-neutral-content">
          Welcome to our property marketplace! Our website connects buyers and
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
          step of the way!
        </p>
      </div>
    </div>
  );
};

export default Notice;
