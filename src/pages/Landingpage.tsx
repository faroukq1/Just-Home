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
    space: "iy103w94ko7f",
    accessToken: "uSMTg31zCEiwkLrWvB99zzNYaKphOoefjDU7HGadzvs",
  });

  const res = await client.getEntries({
    content_type: "justHomeContent",
  });
  const data = res.items;
  console.log(data);
  return { data };
};

const Landingpage = () => {
  return (
    <main>
      <Hero />
      {/* <RecomendedHomes /> */}
      {/* <PropertyPerCity /> */}
      <ChooseUs />
      {/* <BestProperty /> */}
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
