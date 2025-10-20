export default function OurCompany() {
  return (
    <section className="relative py-[50px] sm:py-[100px]">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-fixed bg-[50% 50%] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/background/main-logo.png)`,
          opacity: 0.13,
        }}
      ></div>
      <div className="max-w-6xl mx-auto py-4 relative z-10 px-4 xl:px-0">
        <div className="uppercase font-yanone text-center text-[#46237a]">
          <p className="text-2xl pb-6">Our Company</p>
          <h2 className="text-7xl pb-6">Who We Are</h2>
          <hr className="w-14 border-2 mx-auto border-[#46237a]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 my-14">
          <div className="flex flex-col gap-6">
            <div className="font-yanone uppercase text-[#46237a] flex flex-col gap-6">
              <h3 className="text-3xl">Global Presence</h3>
              <p className="text-xl">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris.
              </p>
            </div>
            <p className="font-works-sans">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, nec sagittis sem nibh id elit.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
              Responsibility
            </h3>
            <div className="font-works-sans flex flex-col gap-6">
              <p>
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio
                sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo. Morbi
                accumsan ipsum velit.
              </p>
              <p>
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </p>
              <p>
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
