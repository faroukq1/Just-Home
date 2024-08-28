import { useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import React, { useState } from "react";
const ProfileInformation = ({
  edit,
  setEdit,
}: {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data }: any = useLoaderData();
  const { email, firstName, lastName, password, phoneNumber, username } = data;
  const [showPass, setShowPass] = useState("password");
  const togglePasswordVisibility = () =>
    setShowPass((prev) => (prev === "text" ? "password" : "text"));
  console.log(edit);
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-xl">User name</h3>
        <p className="text-lg text-neutral-500">{username}</p>
      </div>
      <div>
        <h3 className="font-bold text-xl">First Name</h3>
        <p className="text-lg text-neutral-500">{firstName}</p>
      </div>
      <div>
        <h3 className="font-bold text-xl">Last Name</h3>
        <p className="text-lg text-neutral-500">{lastName}</p>
      </div>
      <div>
        <h3 className="font-bold text-xl">email</h3>
        <p className="text-lg text-neutral-500">{email}</p>
      </div>
      <div>
        <h3 className="font-bold text-xl">Password</h3>
        <input
          type={showPass === "text" ? "text" : "password"}
          disabled
          value={password}
        />
        <button
          className="btn btn-sm btn-neutral"
          onClick={togglePasswordVisibility}
        >
          <FaEye />
        </button>
      </div>
      <div>
        <h3 className="font-bold text-xl">Phone Number</h3>
        <p className="text-lg text-neutral-500">{phoneNumber}</p>
      </div>
      <button className="btn btn-neutral mt-4" onClick={() => setEdit(!edit)}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInformation;
