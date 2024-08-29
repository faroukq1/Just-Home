import { createClient } from "contentful";
import { LoaderFunction } from "react-router-dom";

export const PropertyInformationLoader: LoaderFunction = async ({ params }) => {
  const id = params.id as string;
  const client = createClient({
    space: import.meta.env.VITE_SPACE_TOKEN,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const data = await client.getEntry(id);
  return { data };
};
