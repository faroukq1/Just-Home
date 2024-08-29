import { createClient } from "contentful";
import { LoaderFunction } from "react-router-dom";

export const ProfileLoader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const res = await client.getEntry(id);
  const data = res.fields;
  return {
    data,
  };
};
