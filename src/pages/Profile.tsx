import { Link, useLoaderData } from "react-router-dom";
import modernbuilding from "../assets/modernbuilding.png";
import { PropertyCard } from "../component";
import { IoMdSettings } from "react-icons/io";

const Profile = () => {
  const { data }: any = useLoaderData();
  const { firstName, favorateProperties } = data;
  return (
    <div className="min-h-screen py-20 align-element">
      <div className="flex justify-between">
        <div className="flex flex-col justify-around">
          <h3 className="text-3xl font-semibold tracking-wider">
            Good Morning,
            <span className="text-red-400"> Welcome {firstName}</span>
          </h3>
          <p className="text-neutral-400 font-light tracking-wider">
            Find out the value of your house and follow it over time.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-2xl font-semibold">Setting</h3>
          <button className="btn btn-error">
            <IoMdSettings className="text-white text-3xl" />
          </button>
        </div>
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

      {/* meeting Banner */}
      <div className="overflow-x-auto my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Favorate properties */}
      <div className="mt-8 p-10 rounded-lg bg-base-200">
        <h1 className="text-3xl font-semibold tracking-wider flex items-center gap-4">
          Saved Properites
          <button className="btn btn-error text-white">See All</button>
        </h1>
        <div className="mt-8 w-full min-h-80 rounded-lg flex items-center gap-4">
          {favorateProperties.length ? (
            favorateProperties.slice(0, 2).map((item: any) => {
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
