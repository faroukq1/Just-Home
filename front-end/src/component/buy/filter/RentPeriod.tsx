const rentPeriodData: string[] = [
  "Any are of interest",
  "2-12 months",
  "1-2 years",
  "2+ years",
  "Unlimited",
];
const RentPeriod = () => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">
        Rent Period <span className="font-bold text-neutral-500">(Min.)</span>
      </h3>
      <div>
        {rentPeriodData.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input key={index} type="checkbox" className="checkbox" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RentPeriod;
