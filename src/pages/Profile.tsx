import { Link, useLoaderData } from "react-router-dom";
import modernbuilding from "../assets/modernbuilding.png";
import { PropertyCard } from "../component";
interface ProfileData {
  data: {
    firstName: string;
  };
}

const Profile = () => {
  const { data } = useLoaderData() as ProfileData;
  const { firstName, favorateProperties }: any = data;
  return (
    <div className="min-h-screen py-20 align-element">
      <div>
        <h3 className="mb-2 text-3xl font-semibold tracking-wider">
          Good Morning,
          <span className="text-red-400"> Welcome {firstName}</span>
        </h3>
        <p className="text-neutral-400 font-light tracking-wider">
          Find out the value of your house and follow it over time.
        </p>
      </div>

      {/* Discount Banner */}
      <div className="bg-neutral-100 relative flex items-center justify-between p-12 bg-gradient-to-r from-pink-100 to-transparent rounded-lg overflow-hidden mt-10">
        <div className="z-10">
          <h2 className="text-3xl font-bold text-gray-900">10% Discount!</h2>
          <p className="mt-2 text-gray-600">
            Get a discount on certain days and don’t miss it.
          </p>
          <a className="btn btn-error mt-4">Learn More</a>
        </div>
        <div className="absolute inset-y-0 right-0 h-full">
          <img
            src={modernbuilding}
            alt="Building Image"
            className="h-full object-cover"
          />
        </div>
      </div>

      {/* Favorate properties */}
      <div className="mt-8 p-8 rounded-lg bg-base-200">
        <h1 className="text-3xl font-semibold tracking-wider">
          Saved Properites
        </h1>
        <div className="mt-8 w-full min-h-80 rounded-lg flex justify-center items-center gap-2">
          {favorateProperties.length ? (
            favorateProperties.map((item: any) => {
              const cardData = {
                id: item.sys.id,
                title: item.fields.title,
                price: item.fields.price,
                address: item.fields.address,
                sold: item.fields.sold,
                description: item.fields.description,
                image: item.fields.image.fields.file.url,
                images: item.fields.images,
                features: item.fields.features,
              };
              return <PropertyCard {...cardData} key={cardData.id} />;
            })
          ) : (
            <>
              <p className="text-xl text-neutral font-medium">
                Empty list You can check out market place.
              </p>
              <Link to="/properties/1" className="btn btn-error">
                Market Place
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
