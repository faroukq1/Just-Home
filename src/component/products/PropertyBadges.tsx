import { createClient } from "contentful-management";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegBookmark, FaHeart, FaBookmark } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENT_MANAGMENT_TOKEN,
});
const PropertyBadges = () => {
  const [favorate, setFavorate] = useState(false);
  const [bookMarked, setBookmarked] = useState(false);
  const { data }: any = useLoaderData();

  const addFavoritePropertyToUser = async (propertyId: string) => {
    try {
      const space = await client.getSpace(import.meta.env.VITE_SPACE_TOKEN);
      const environment = await space.getEnvironment("master");

      const userEntry = await environment.getEntry("120WEAYiWFxsGpe4odTvqA");
      console.log(userEntry);
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
      setFavorate(true);
    } catch (error) {
      console.error("Error adding favorite property:", error);
    }
  };

  return (
    <div className="mt-8 flex flex-wrap justify-start md:justify-between gap-4 items-center">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="flex gap-4 items-center text-green-600 font-bold tracking-wider">
          <span className="px-3 py-1 bg-green-200 rounded-lg text-xl font-normal">
            5.0
          </span>
          Perfect
        </h1>
        <div className="flex flex-wrap gap-2 ml-2">
          <div className="badge badge-neutral">Hotels</div>
          <div className="badge badge-error">New Building</div>
          <div className="badge badge-warning">Top Value</div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-1 ml-4">
          {Array.from({ length: 5 }, (_, index) => {
            return <FaStar key={index} className="text-xl text-warning" />;
          })}
        </div>
        <button onClick={() => addFavoritePropertyToUser(data.sys.id)}>
          {favorate ? (
            <FaHeart className="text-xl" />
          ) : (
            <FaRegHeart className="text-xl" />
          )}
        </button>
        <button onClick={() => setBookmarked(!bookMarked)}>
          {bookMarked ? (
            <FaBookmark className="text-xl" />
          ) : (
            <FaRegBookmark className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PropertyBadges;
