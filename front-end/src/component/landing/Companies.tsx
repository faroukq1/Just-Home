import { companies } from "../../util/landingData";

const Companies = () => {
  return (
    <div className="align-element my-20">
      <p className="text-center text-sm text-neutral-500">
        Thousands of world’s leading companies trust Space
      </p>
      <div className="flex flex-col items-center justify-between sm:flex-row gap-4 my-8">
        {companies.map((company, index) => {
          return (
            <img
              key={index}
              src={company}
              alt="company"
              className=" object-contain w-40 h-40 sm:w-20 sm:h-20"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
