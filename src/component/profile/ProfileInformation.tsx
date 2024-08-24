import image from "../../assets/profilepic.png";
import { LiaUserEditSolid } from "react-icons/lia";

const ProfileInformation = () => {
  return (
    <div className="relative w-1/3 h-fit p-4 bg-neutral-content rounded-lg flex flex-col justify-center gap-4">
      <div className="relative w-full grid place-items-center">
        <img
          src={image}
          alt="profile picture"
          className="rounded-full max-w-[300px] border border-black object-cover"
        />
        <button className="absolute top-2 right-24 bg-neutral p-1 rounded-lg">
          <LiaUserEditSolid className="text-xl text-white" />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-sm text-neutral-400">INFORMATION</p>
        <div className="h-[1px] w-full bg-neutral-400"></div>
      </div>
      <div className="w-full p-4 flex flex-col gap-2 rounded-lg bg-base-200">
        <h1>name : john doe</h1>
        <h3>email : john@me.com</h3>
        <h3>phone : +213 6555555555</h3>
        <h3>address : 505 Historic Way, Charleston, SC</h3>
      </div>
    </div>
  );
};

export default ProfileInformation;
