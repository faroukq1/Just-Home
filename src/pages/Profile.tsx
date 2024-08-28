import { LoaderFunction } from "react-router-dom";
import { ProfileInformation } from "../component";
import { createClient } from "contentful";
export const loader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const res = await client.getEntry(id);
  const data = res.fields;
  return {
    data,
  };
};
const Profile = () => {
  return (
    <div className="h-screen align-element flex gap-4 p-4">
      <ProfileInformation />
      <div className="p-4 flex-1 bg-neutral-content rounded-lg">
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default Profile;
