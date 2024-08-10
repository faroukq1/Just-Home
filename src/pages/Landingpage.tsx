import {
  RecomendedHomes,
  Hero,
  PropertyPerCity,
  ChooseUs,
  BestProperty,
  Testimonial,
  Review,
  Companies,
  ArticleAnsNews,
  BecomeAgent,
  PopularRealEstate,
} from "../component";
import customFetch from "../util/customFetch";

export const loader = async () => {
  const url = "api/properties?populate=images";
  const response = await customFetch(url);
  const data = response.data.data;
  return { data: data };
};

const Landingpage = () => {
  return (
    <main>
      <Hero />
      <RecomendedHomes />
      <PropertyPerCity />
      <ChooseUs />
      <BestProperty />
      <Testimonial />
      <Review />
      <Companies />
      <ArticleAnsNews />
      <PopularRealEstate />
      <BecomeAgent />
    </main>
  );
};

export default Landingpage;
