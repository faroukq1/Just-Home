const extraFeature = [
  {
    id: 1,
    text: "Allow to bring pet",
    price: 13,
  },
  {
    id: 2,
    text: "breakfast a day per person",
    price: 10,
  },
  {
    id: 3,
    text: "parking a day",
    price: 6,
  },
  {
    id: 4,
    text: "extra pillow",
    price: 0,
  },
];
const priceData = [
  {
    id: 1,
    text: "1 Night",
    price: 501,
  },
  {
    id: 2,
    text: "Discount 20%",
    price: -200,
  },
  {
    id: 3,
    text: "Breakfast a day per person",
    price: 5,
  },
  {
    id: 4,
    text: "Service fee",
    price: 5,
  },
];
const PropertyPayment = () => {
  return (
    <div
      style={{ flexGrow: "0.2" }}
      className="px-8 py-4 border border-b-neutral-500 rounded-3xl h-fit"
    >
      <div className="pb-4 flex items-center gap-4 justify-between border-b border-b-neutral-300">
        <h1 className="text-xl font-bold">
          $301<span className="font-medium text-lg">/night</span>
        </h1>
        <div className="badge badge-error">20% OFF</div>
      </div>
      <div className="flex justify-between gap-8 my-4">
        <div className="flex-1 grid gap-4">
          <h3 className="text-lg text-neutral-500">Check-In</h3>
          <span className="btn btn-disabled">Oct7. 2023</span>
        </div>
        <div className="grid gap-4 flex-1">
          <h3 className="text-lg text-neutral-500">Check-Out</h3>
          <span className="btn btn-disabled">Oct12. 2023</span>
        </div>
      </div>
      <div></div>
      <div className="grid gap-4">
        <h3 className="text-xl text-neutral-500">Guest</h3>
        <select className="select select-bordered w-full">
          <option>2 Adult, 1 children</option>
        </select>
      </div>
      <div className="mt-4">
        <h3 className="text-xl text-neutral-400">Extra features</h3>
        <div>
          {extraFeature.map(({ id, text, price }) => {
            return (
              <div key={id} className="flex justify-between items-center">
                <div className="flex gap-2 mt-3">
                  <input type="checkbox" className="checkbox" />
                  <p>{text}</p>
                </div>
                <p>{price === 0 ? "free" : price.toString() + "$"}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl text-neutral-400 mb-4">Price</h3>
        <div className="grid gap-3 bg-neutral-200 p-4 rounded-md">
          {priceData.map(({ id, text, price }) => {
            return (
              <div key={id} className="flex justify-between items-center">
                <p>{text}</p>
                <span className="font-bold">
                  {price < 0 ? "-$" + price.toString() : "$" + price.toString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="flex justify-between items-center text-neutral-500">
          Total Payment
          <span className="font-bold text-xl text-black">$316</span>
        </h3>
        <button
          type="button"
          className="btn btn-success w-full text-white tracking-wide mt-3"
        >
          Book Now
        </button>
        <p className="mt-6 text-neutral-400 text-center">
          You will not get charged yet
        </p>
      </div>
    </div>
  );
};

export default PropertyPayment;
