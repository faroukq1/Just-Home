import { LoaderFunction } from "react-router-dom";
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
import { createClient } from "contentful";
export const loader: LoaderFunction = async () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "justHomeContent",
  });
  const data = res.items;
  const specialHomes = data.filter((item) => item.fields.special);
  return { data, specialHomes };
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
