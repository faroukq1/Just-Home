const CustomInputNumber = ({ title }: { title: string }) => {
  const minValue: number = 1000;
  const maxPrice: number = 10000;
  const steps: number = 1000;
  return (
    <div>
      <h3 className="mb-2 font-semibold tracking-wider">{title}</h3>
      <input
        className="input input-bordered w-full"
        defaultValue="any"
        type="number"
        min={minValue}
        max={maxPrice}
        step={steps}
      />
    </div>
  );
};

export default CustomInputNumber;
