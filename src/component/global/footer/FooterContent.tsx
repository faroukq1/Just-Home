import { Link } from "react-router-dom";
import downloadFromGoogle from "../../../assets/downloadgoogle.png";
import downloadFromApple from "../../../assets/downlodapple.png";
type linksType = { id: number; title: string };
type footerContentType = {
  id: number;
  title: string;
  links: linksType[];
};

const footerContent: footerContentType[] = [
  {
    id: 1,
    title: "Discover",
    links: [
      { id: 11, title: "Miami" },
      { id: 12, title: "New York" },
      { id: 13, title: "Chicago" },
      { id: 14, title: "Florida" },
      { id: 15, title: "Los Angeles" },
      { id: 16, title: "San Diego" },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      { id: 21, title: "About" },
      { id: 22, title: "Contact" },
      { id: 23, title: "FAQ's" },
      { id: 24, title: "Blog" },
      { id: 25, title: "Pricing Plans" },
      { id: 26, title: "Privacy Policy" },
      { id: 27, title: "Terms & Conditions" },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    links: [
      { id: 31, title: "hi@justhome.com" },
      { id: 32, title: "(123) 456-7890" },
    ],
  },
  {
    id: 4,
    title: "Our Address",
    links: [
      {
        id: 41,
        title: "99 Fifth Avenue, 3rd Floor, San Francisco, CA 1980",
      },
    ],
  },
];

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
      <div className="flex-1 flex flex-wrap justify-between gap-10">
        {footerContent.map(({ id, title, links }) => {
          return (
            <div key={id} className="">
              <h3 className="font-semibold text-neutral-700 text-start">{title}</h3>
              <ul className="mt-4 flex items-center flex-wrap sm:flex-col gap-4">
                {links.map(({ id, title }) => {
                  return (
                    <Link
                      className="text-sm font-medium text-white text-start w-full"
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
