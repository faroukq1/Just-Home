import ArticleCard from "../global/ArticleCard";
import PrintTitle from "../global/PrintTitle";
import { articleList } from "../../util/landingData";

const ArticlesAndNews = () => {
  return (
    <div className="my-28 py-10 bg-secondary-content">
      <div className="align-element">
        <PrintTitle
          title="Recent articles & news"
          subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, error?"
        />
        <div className="flex flex-col items-center justify-center flex-wrap md:flex-row gap-6">
          {articleList.map((item) => {
            return <ArticleCard {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndNews;
