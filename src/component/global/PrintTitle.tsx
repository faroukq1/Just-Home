const PrintTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="pb-8 pt-28 text-center">
      <h1 className="text-3xl capitalize text-info-content">{title}</h1>
      <p className="text-xs text-base-content mt-2">{subTitle}</p>
    </div>
  );
};

export default PrintTitle;
