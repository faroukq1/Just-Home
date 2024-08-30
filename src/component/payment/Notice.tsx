type noticeType = {
  image: string;
  heading: string;
  paragraph: string;
  reverse?: boolean;
};
const Notice = ({ image, heading, paragraph, reverse }: noticeType) => {
  return (
    <div
      className={`bg-neutral p-10 rounded-lg flex items-center gap-8 h-fit ${
        reverse && "flex-row-reverse"
      }`}
    >
      <img src={image} alt="image" className="w-96 rounded-lg" />
      <div className="grid gap-4">
        <h1 className="text-3xl btn btn-wide">{heading}</h1>
        <p className="font-bold leading-8 tracking-wide text-neutral-content">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Notice;
