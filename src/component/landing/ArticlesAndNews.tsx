import ArticleCard from "../global/ArticleCard";
import PrintTitle from "../global/PrintTitle";
import office from "../../assets/office.png";
import articlevilla from "../../assets/articlevilla.png";
import chair from "../../assets/chair.png";
import villatree from "../../assets/villatree.png";

type articleListType = {
  id: number;
  image: string;
  propertyType: string;
  date: string;
  heading: string;
};
const articleList: articleListType[] = [
  {
    id: 1,
    image: office,
    propertyType: "Apartment",
    date: " March 19, 2024",
    heading: "Housing Markets That Changed the Most This Week",
  },
  {
    id: 2,
    image: articlevilla,
    propertyType: "Apartment",
    date: "  March 19, 20244",
    heading: "Read Unveils the Best Canadian Cities for Biking",
  },
  {
    id: 3,
    image: chair,
    propertyType: "Office",
    date: "  March 19, 2024",
    heading: "10 Walkable Cities Where You Can Live Affordably",
  },
  {
    id: 4,
    image: villatree,
    propertyType: "Shop",
    date: "  March 19, 2024",
    heading: "New Apartment Nice in the Best Canadian Cities",
  },
];

const ArticlesAndNews = () => {
  return (
    <div className="align-element my-32">
      <PrintTitle
        title="Recent articles & news"
        subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, error?"
      />
      <div className="flex gap-4">
        {articleList.map((item) => {
          return <ArticleCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ArticlesAndNews;
