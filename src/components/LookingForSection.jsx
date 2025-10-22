import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import SectionTitle from "./SectionTitle";

export default function LookingForSection() {
  return (
    <section className="py-10 md:py-20 relative bg-[url(/background/pool-bg.jpg)] bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-[#46237a]/80"></div>

      <div className="max-w-6xl mx-auto py-4 relative z-10 px-4 xl:px-0 text-white">
        <SectionTitle
          subTitle={"We're Here To Help You"}
          title={"What Are You Looking For?"}
          theme={"light"}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-7 ">
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-7">
            <img src={assets.building_icon_2} alt="" className="mx-auto" />
            <h3 className="font-yanone text-4xl">Apartments</h3>
            <hr className="w-10 border-2 mx-auto border-white" />
            <p className="font-works-sans text-center">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
            </p>
            <Link
              to="/properties"
              className="bg-white font-works-sans text-black px-4 py-2 rounded-md border-1 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Find Apartments
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-7">
            <img src={assets.building_icon_1} alt="" className="mx-auto" />
            <h3 className="font-yanone text-4xl">Houses</h3>
            <hr className="w-10 border-2 mx-auto border-white" />
            <p className="font-works-sans text-center">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
            </p>
            <Link
              to="/properties"
              className="bg-white font-works-sans text-black px-4 py-2 rounded-md border-1 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Find Houses
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-7">
            <img src={assets.building_icon_3} alt="" className="mx-auto" />
            <h3 className="font-yanone text-4xl">Offices</h3>
            <hr className="w-10 border-2 mx-auto border-white" />
            <p className="font-works-sans text-center">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
            </p>
            <Link
              to="/properties"
              className="bg-white font-works-sans text-black px-4 py-2 rounded-md border-1 border-white hover:bg-transparent hover:text-white transition-all duration-200"
            >
              Find Offices
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
