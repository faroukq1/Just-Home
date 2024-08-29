import { createClient } from "contentful";
import { LoaderFunction } from "react-router-dom";

export const LandingLoader: LoaderFunction = async () => {
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
