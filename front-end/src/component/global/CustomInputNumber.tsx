const CustomInputNumber = ({
  title,
  name,
  min,
  max,
  steps,
}: {
  title: string;
  name: string;
  min: number;
  max: number;
  steps?: number;
}) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold tracking-wider">{title}</h3>
      <input
        className="input input-bordered w-full"
        defaultValue="any"
        type="number"
        min={min}
        max={max}
        step={steps || 10}
        name={name}
      />
    </div>
  );
};

export default CustomInputNumber;
