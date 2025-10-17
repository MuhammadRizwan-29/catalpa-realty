import CardListing from "./CardListing";

export default function CardsSection({ subTitle, title, items, data }) {
  return (
    <section className="pt-[75px] pb-15 sm:py-[100px]">
      <div className="max-w-6xl mx-auto px-4 xl:px-0">
        <div className="pb-4">
          <p className="text-[#46237a] uppercase font-yanone text-xl text-center pb-6">
            {subTitle}
          </p>
          <h2 className="text-[#46237a] uppercase font-yanone text-7xl text-center pb-6">
            {title}
          </h2>
          <hr className="w-14 border-2 mx-auto border-[#46237a]/80" />
        </div>
        <CardListing items={items} data={data} />
      </div>
    </section>
  );
}
