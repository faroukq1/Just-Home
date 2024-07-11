const RoomsFilter = () => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold tracking-wider">
        Rooms <span className="text-neutral-500 font-bold">(Min.)</span>
      </h3>
      <div>
        {Array.from({ length: 4 }, (_, i) => {
          const index = i + 1;
          return (
            <div key={index} className="flex items-center gap-4 w-full mt-2">
              <input type="checkbox" className="checkbox" />
              <p>
                {index} room{i > 1 && "s"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsFilter;
