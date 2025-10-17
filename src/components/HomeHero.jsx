import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function HomeHero() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="pt-30 relative bg-[url(/background/home-hero-bg.jpg)] bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-[#46237a]/80"></div>
      <div className="max-w-6xl mx-auto py-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1.5fr] items-center gap-5 px-4 xl:px-0">
          <div className="text-white flex flex-col items-start gap-4 pb-10">
            <div className="w-full sm:max-w-60 bg-white p-3 rounded-md mt-5 md:my-10">
              <div className="flex items-center gap-2">
                <img
                  src={assets.mobile_icon}
                  alt="Mobile Icon"
                  className="max-w-8"
                />
                <a
                  href="tel:+1910-626-85255"
                  className="text-black font-works-sans hover:underline"
                >
                  +1 910-626-85255
                </a>
              </div>
            </div>
            <h1 className="font-yanone text-6xl md:text-9xl uppercase">
              Find Your Dream Home Today
            </h1>
            <p className="font-works-sans mb-4">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus.
            </p>
            <Link
              to="/contact"
              className="bg-white font-works-sans text-black px-4 py-2 rounded-md border-1 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="bg-white rounded-lg px-[30px] py-[50px]">
            <p className="text-[#46237a] uppercase font-yanone text-2xl text-center pb-6">
              Need Help?
            </p>
            <h2 className="text-[#46237a] uppercase font-yanone text-4xl text-center pb-6">
              Message Us
            </h2>
            <form>
              <input
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="border-1 border-[#46237a] bg-[#46237a] text-white font-works-sans rounded-md px-8 py-3 hover:bg-transparent hover:text-[#46237a] transition-all duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
