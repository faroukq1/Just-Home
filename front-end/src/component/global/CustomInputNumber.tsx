const CustomInputNumber = ({
  title,
  name,
  min,
  max,
  defautValue,
}: {
  title: string;
  name: string;
  min: number;
  max: number;
  defautValue: number;
}) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold tracking-wider">{title}</h3>
      <input
        className="input input-bordered w-full"
        defaultValue={defautValue}
        type="number"
        min={min}
        max={max}
        name={name}
      />
    </div>
  );
};

export default CustomInputNumber;
