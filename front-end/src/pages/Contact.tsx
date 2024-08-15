import contactpagepic from "../assets/conactpagepic.jpg";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="h-screen py-18 flex gap-32">
      <div className="hidden xl:block w-[50%] flex-1 h-screen bg-black">
        <img
          className="h-full object-cover"
          src={contactpagepic}
          alt="contact page pic"
        />
      </div>

      <div className="flex-1 pt-20 flex gap-10 px-20 xl:px-0">
        <div className="flex flex-col justify-around">
          <h1 className="text-6xl font-light">contact</h1>
          <div className="grid gap-5">
            <h3 className="text-2xl capitalize text-neutral-500">
              tourist visist
            </h3>
            <div className="grid gap-2">
              <p className="text-sm text-neutral-500">Tuesday-Saturday</p>
              <p className="text-sm text-neutral-500">9:00 am - 5:00 pm PST</p>
            </div>
            <div className="grid gap-2">
              <p className="text-sm text-neutral-500">info@justhome</p>
              <p className="text-sm text-neutral-500">208-429-1058</p>
              <p className="text-sm text-neutral-500">208-429-1222</p>
            </div>
            <div className="flex gap-4 mt-4">
              <CiFacebook className="text-2xl" />
              <CiInstagram className="text-2xl" />
              <CiTwitter className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <p className="flex-1 flex justify-center items-center text-sm text-center w-3/5 leading-6 text-neutral-500">
            The Stahl family, which owns and operates the Stahl House, Case
            Study House #22, also makes the property available, on a limited
            basis, for those in the commercial film or photography industries.
          </p>
          <div className="flex-1">
            <h3 className="text-3xl font-light mb-8">commericial request</h3>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input border-b border-b-neutral-300 rounded-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="input border-b border-b-neutral-300 rounded-sm"
              />
              <input
                type="text"
                placeholder="Message"
                className="input border-b border-b-neutral-300 rounded-sm"
              />
              <button
                type="button"
                className="btn btn-neutral text-lg tracking-wide"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
