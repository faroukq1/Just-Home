import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const PropertyPayment = () => {
  const { data }: any = useLoaderData();
  const userId = data.fields.propertyOwner.sys.id;
  const { profileimage, firstName, lastName, username, email, phoneNumber } =
    data.fields.propertyOwner.fields;
  return (
    <div>
      <Link to={`/profile/${userId}`} className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src={`https:${profileimage.fields.file.url}`} />
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">
            {firstName} {lastName}
          </h1>
          <p className="text-sm text-neutral-500">{username}</p>
        </div>
      </Link>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-bold mt-4">Owner Contacts</h1>
          <h3 className="flex items-center gap-2 mt-2">
            <MdOutlineEmail className="text-3xl font-bold" />{" "}
            <span className="bg-neutral p-1 rounded-md text-white">
              {email}
            </span>
          </h3>
          <h3 className="flex items-center gap-2 mt-2">
            <FaPhoneSquare className="text-3xl font-bold" />
            <span className="bg-neutral p-1 rounded-md text-white">
              {phoneNumber}
            </span>
          </h3>
        </div>
        <button className="btn btn-neutral btn-wide">Book Now</button>
      </div>
    </div>
  );
};

export default PropertyPayment;
