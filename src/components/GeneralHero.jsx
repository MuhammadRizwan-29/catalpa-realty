export default function GeneralHero({ url, title }) {
  return (
    <section
      className={`pt-30 relative bg-top bg-auto bg-no-repeat bg-fixed min-h-[400px] sm:min-h-[500px]`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute inset-0 bg-[#46237a]/80"></div>
      <div className="max-w-6xl mx-auto py-4 relative z-10 min-h-[300px] sm:min-h-[350px] flex flex-col justify-end px-4 xl:px-0">
        <div className="flex flex-col gap-2 sm:gap-6 mt-auto mb-0 pb-8 sm:pb-0">
          <h1 className="font-yanone text-7xl uppercase text-white">{title}</h1>
          <hr className="w-14 border-2 border-white" />
        </div>
      </div>
    </section>
  );
}
