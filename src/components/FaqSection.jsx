export default function FaqSection() {
  return (
    <section className="relative py-[50px] sm:py-[100px]">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-fixed bg-[50% 50%] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/background/main-logo.png)`,
          opacity: 0.13,
        }}
      ></div>
      <div className="max-w-6xl mx-auto relative z-10 px-4 xl:px-0">
        <div className="uppercase font-yanone text-center text-[#46237a]">
          <p className="text-2xl pb-6">FAQ</p>
          <h2 className="text-5xl sm:text-7xl pb-6">
            Frequently Asked Questions
          </h2>
          <hr className="w-14 border-2 mx-auto border-[#46237a]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-14">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                Am I Ready to Be a Homeowner?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                Is Renting or Buying Better?
              </h3>
              <p className="font-works-sans mb-8">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                What Is the Lender's Formula?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                What Do I Look for in Homes?
              </h3>
              <p className="font-works-sans mb-8">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                Do I Need a Home Warranty?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                What Should I Expect at Closing?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                What Is Pre-approval?
              </h3>
              <p className="font-works-sans mb-8">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                Am I Ready to Rent?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                What Should I Offer?
              </h3>
              <p className="font-works-sans mb-8">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-yanone uppercase text-[#46237a] text-3xl">
                Can I Ask You for Advice?
              </h3>
              <p className="font-works-sans mb-8">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
