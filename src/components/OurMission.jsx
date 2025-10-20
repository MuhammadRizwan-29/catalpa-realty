import { assets } from "../assets/assets";

export default function OurMission() {
  return (
    <section>
      <div className="overflow-hidden">
        <img
          src={assets.about_lg}
          alt="About Image"
          className="w-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto py-10 sm:py-20 px-4 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <div className="flex flex-col gap-6">
            <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
              Our Vision
            </h3>
            <div className="font-works-sans flex flex-col gap-6">
              <p>
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
                sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo.
              </p>
              <p>
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
              Our Mission
            </h3>
            <div className="font-works-sans flex flex-col gap-6">
              <p>
                Sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
                accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                ornare odio. Sed non mauris vitae erat consequat auctor eu in
                elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Mauris in erat justo.
              </p>
              <p>
                Accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                ornare odio. Sed non mauris vitae erat consequat auctor eu in
                elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
