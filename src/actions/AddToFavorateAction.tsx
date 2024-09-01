import { createClient } from "contentful-management";
import { toast } from "react-toastify";
const client = createClient({
  accessToken: import.meta.env.VITE_CONTENT_MANAGMENT_TOKEN,
});
export const addFavoritePropertyToUser = async (propertyId: string) => {
  try {
    const space = await client.getSpace(import.meta.env.VITE_SPACE_TOKEN);
    const environment = await space.getEnvironment("master");

    const userEntry = await environment.getEntry("120WEAYiWFxsGpe4odTvqA");
    if (!userEntry.fields.favorateProperties) {
      userEntry.fields.favorateProperties = {};
    }

    if (!userEntry.fields.favorateProperties["en-US"]) {
      userEntry.fields.favorateProperties["en-US"] = [];
    }

    const currentFavorites = userEntry.fields.favorateProperties["en-US"];
    userEntry.fields.favorateProperties["en-US"] = [
      ...currentFavorites,
      { sys: { type: "Link", linkType: "Entry", id: propertyId } },
    ];
    const updatedUserEntry = await userEntry.update();

    await updatedUserEntry.publish();

    toast.success("Favorite property added successfully");
  } catch (error) {
    console.error("Error adding favorite property:", error);
  }
};
