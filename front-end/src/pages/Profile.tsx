import { ProfileInformation } from "../component";

const Profile = () => {
  return (
    <div className="h-screen align-element flex gap-4 p-4">
      <ProfileInformation />
      <div className="flex-1 bg-neutral-content rounded-lg">
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default Profile;
