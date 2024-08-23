import image from "../assets/profilepic.png";
const skills: string[] = [
  "Branding",
  "UI/UX",
  "Web-Desgin",
  "Packaging",
  "Print & Editorial",
];
const Profile = () => {
  return (
    <div className="h-screen align-element flex gap-4 p-4">
      <div className="w-1/3 h-fit p-4 bg-neutral-content rounded-lg flex flex-col justify-center gap-4">
        <img
          src={image}
          alt="profile picture"
          className="rounded-lg border border-black object-cover"
        />
        <div className="flex items-center gap-4 mt-4">
          <p className="text-sm text-neutral-400">WORK</p>
          <div className="h-[1px] w-full bg-neutral-400"></div>
        </div>
        <div>
          <h3 className="flex items-center gap-4 mb-3">
            Spotify New York
            <button className="btn btn-primary btn-sm">Change</button>
          </h3>
          <p className="text-sm text-neutral-500">
            101 Central Avenue, Chicago, IL
          </p>
        </div>
        <div>
          <h3 className="flex items-center gap-4 mb-3">
            Spotify New York
            <button className="btn btn-primary btn-sm">Change</button>
          </h3>
          <p className="text-sm text-neutral-500">
            101 Central Avenue, Chicago, IL
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-sm text-neutral-400">SKILLS</p>
          <div className="h-[1px] w-full bg-neutral-400"></div>
        </div>
        <div>
          {skills.map((item: string) => {
            return <h3 key={item}>{item}</h3>;
          })}
        </div>
      </div>

      <div className="flex-1 bg-neutral-content rounded-lg">
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default Profile;
