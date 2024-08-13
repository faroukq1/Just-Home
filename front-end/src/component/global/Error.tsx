import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex items-center justify-center bg-slate-500">
      <h1 className="text-white font-bold">
        Oops , sorry there is something happen...
      </h1>
    </div>
  );
};

export default Error;
