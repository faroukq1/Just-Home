import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/error.png";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col items-center bg-neutral">
      <div className="mt-40 mb-10 grid gap-8">
        <img src={errorImage} alt="error image" className="object-contain" />
        <h1 className="text-center text-white font-bold text-2xl">
          Oops , sorry there is something happen...
        </h1>
        <div className="grid place-items-center">
          <Link to="/" className="btn btn-wide">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
