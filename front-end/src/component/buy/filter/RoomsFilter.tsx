type roomType = {
  data: string[];
  type: string;
  name: string;
};
const RoomsFilter = ({ data, type, name }: roomType) => {
  console.log(data);
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">
        Rooms <span className="text-neutral-500 font-bold">(Min.)</span>
      </h3>
      <div>
        {data.map((item, index) => {
          console.log(item);
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input name={name} type={type} className="checkbox" />
              <p>
                {item} room{index > 1 && "s"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsFilter;
