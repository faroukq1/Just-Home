import { MdDone } from "react-icons/md";

const CreateListingBar = () => {
  return (
    <div className="mt-8 flex items-center justify-evenly gap-4">
      <MdDone className="btn btn-disabled btn-md btn-circle" />
      <span className="flex-1 h-[4px] bg-black rounded-3xl"></span>
      <MdDone className="btn btn-disabled btn-md btn-circle" />
      <span className="flex-1 h-[4px] bg-black rounded-3xl"></span>
      <MdDone className="btn btn-disabled btn-md btn-circle" />
    </div>
  );
};

export default CreateListingBar;
