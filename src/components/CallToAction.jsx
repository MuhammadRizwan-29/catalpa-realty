import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function CallToAction() {
  return (
    <section className="pt-[75px] pb-15 sm:py-[100px]">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center">
          <div className="shadow-[0_1px_10px_rgba(70,35,122,0.25)]  bg-white w-60 p-4 flex items-center gap-2 rounded-md mb-10">
            <img
              src={assets.mobile_icon}
              alt="Contact Icon"
              className="max-w-6"
            />
            <a
              href="tel:+1910-626-85255"
              className="font-works-sans hover:underline"
            >
              +1 910-626-85255
            </a>
          </div>
          <h2 className="text-[#46237a] uppercase font-yanone text-7xl text-center pb-6 max-w-3xl md:leading-22">
            Let's Find You Together The Place You Deserve
          </h2>
          <hr className="w-14 border-2 mx-auto border-[#46237a]/80" />
          <p className="font-works-sans text-center text-[#46237a] max-w-xl py-8">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate.
          </p>
          <Link
            to="/contact"
            className="bg-[#46237a] border-1 border-[#46237a] px-8 py-2 text-white font-works-sans rounded-md hover:bg-transparent hover:text-[#46237a] transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
