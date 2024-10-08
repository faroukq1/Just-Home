type smallCardType = {
  logo: string;
  title: string;
  subtitle: string;
};
const SmallCard = ({ logo, title, subtitle }: smallCardType) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <img
        className="w-14 h-14 bg-white p-2 rounded-md"
        src={logo}
        alt="ticket logo"
      />
      <h1 className="text-md font-medium">{title}</h1>
      <p className="text-center text-sm">{subtitle}</p>
    </div>
  );
};

export default SmallCard;
