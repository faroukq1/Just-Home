import { useLoaderData } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { EditInformation, ProfileInformation } from "../component";
import { useState } from "react";

const Profile = () => {
  const { data }: any = useLoaderData();
  const image = data.profileimage.fields.file.url;
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div className="h-screen align-element gap-4 p-4">
      <h1 className="text-3xl text-neutral font-bold tracking-wider mb-8 flex items-center gap-4">
        <span
          className={`btn ${edit ? "btn-secondary" : "btn-neutral"} btn-sm`}
        ></span>
        {edit ? "Edit Profile" : "Profile"}
      </h1>
      <div className="flex gap-6 justify-center">
        <div className="relative grid place-items-center">
          <img
            src={`https:${image}`}
            alt="profile image"
            className="w-96 h-96 rounded-box"
          />
          <button className="absolute top-5 right-5 btn btn-sm btn-neutral">
            <FaCamera />
          </button>
        </div>
        {edit ? (
          <EditInformation />
        ) : (
          <ProfileInformation edit={edit} setEdit={setEdit} />
        )}
      </div>
    </div>
  );
};

export default Profile;
