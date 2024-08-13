const LoadingSpinner = ({ quantity }: { quantity: number }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      {Array.from({ length: quantity }, (_, index) => {
        return (
          <span
            key={index}
            className="loading loading-spinner loading-md"
          ></span>
        );
      })}
    </div>
  );
};

export default LoadingSpinner;
