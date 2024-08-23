import { FaEdit } from "react-icons/fa";

const EditInformation = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <label className="flex-1 input input-sm input-disabled input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder={placeHolder}
          disabled
        />
      </label>
      <button className="grid items-center btn btn-square btn-sm btn-neutral">
        <FaEdit className="text-lg" />
      </button>
    </div>
  );
};

export default EditInformation;
