const PrintTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="my-10 text-center">
      <h1 className="text-3xl capitalize">{title}</h1>
      <p className="text-xs text-base-500 mt-2">{subTitle}</p>
    </div>
  );
};

export default PrintTitle;
