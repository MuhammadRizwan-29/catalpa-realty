import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function WhoWeAre() {
  return (
    <section className="py-10 md:py-20 relative bg-[url(/background/about-us-bg.jpg)] bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-[#46237a]/80"></div>
      <div className="max-w-6xl mx-auto py-4 relative z-10 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-white flex flex-col gap-5 items-start justify-center">
            <p className="font-yanone text-xl uppercase ">Who We Are</p>
            <h1 className="font-yanone text-4xl md:text-7xl uppercase">
              About Us
            </h1>
            <hr className="w-14 border-2 border-white " />
            <p className="font-yanone text-xl uppercase ">
              Who We Are About Us Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="font-works-sans mb-4">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
              tellus a odio tincidunt auctor.
            </p>
            <Link
              to="/contact"
              className="bg-white font-works-sans text-black px-4 py-2 rounded-md border-1 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src={assets.home_about_img}
              alt="Party"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
