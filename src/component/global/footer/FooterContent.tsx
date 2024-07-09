import { Link } from "react-router-dom";
import downloadFromGoogle from "../../../assets/downloadgoogle.png";
import downloadFromApple from "../../../assets/downlodapple.png";
import { footerContent } from "../../../util/landingData";

const FooterContent = () => {
  return (
    <div className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-b-neutral-800">
      {/*SUBSCRIBE SECTION */}
      <div className="mr-6">
        <p className="mb-4 font-semibold text-neutral-700">subscribe</p>
        <div>
          <label>
            <input
              type="text"
              placeholder="Your e-mail"
              className="input w-full max-w-xs bg-transparent border-b border-b-neutral-600 placeholder:text-sm"
            />
          </label>
        </div>
        <p className="mt-6 mb-4 font-semibold text-neutral-700 w-10/12">
          Subscribe to our newsletter to receive our weekly feed.
        </p>
      </div>
      {/*LINKS SECTION */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {footerContent.map(({ id, title, links }) => {
          return (
            <div key={id}>
              <h3 className="font-semibold text-neutral-700">{title}</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {links.map(({ id, title }) => {
                  return (
                    <Link
                      className="text-sm font-medium text-white"
                      to="/"
                      key={id}
                    >
                      {title}
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/*DOWNLOAD SECTOIN */}
      <div className="flex flex-col items-end">
        <p className="w-56 mb-4 font-semibold text-neutral-700">get the app</p>
        <img
          className="mt-2 w-56"
          src={downloadFromApple}
          alt="download from apple"
        />
        <img
          className="mt-2 w-56"
          src={downloadFromGoogle}
          alt="download from google"
        />
      </div>
    </div>
  );
};

export default FooterContent;
