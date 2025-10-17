import { Link } from "react-router-dom";

export default function CardListing({ items, data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 mt-6">
      {data.slice(0, items).map((card, index) => {
        return (
          <div
            key={index}
            className="border-1 border-[#46237a] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_1px_10px_rgba(70,35,122,0.4)] pb-3"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover z-9"
            />
            <div
              className={`relative -top-6 left-7 px-4 py-3 -mb-4 max-w-8/12 rounded-md ${
                card.nature === "For Sale"
                  ? "bg-[#46237a] text-white shadow-md"
                  : "bg-white text-[#46237a] shadow-md"
              }`}
            >
              <span className="font-yanone uppercase text-xl">
                {card.nature}
              </span>
            </div>
            <div className="px-7 py-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={card.type.icon}
                  alt={card.type.content}
                  className="max-w-5 object-cover"
                />
                <span className="font-works-sans">{card.type.content}</span>
              </div>
              <div className="font-yanone uppercase text-[#46237a]">
                <h3 className="text-4xl">{card.title}</h3>
                <h4 className="text-xl my-1">{card.price}</h4>
              </div>
              <p className="font-yanone text-xl uppercase mb-2">
                {card.location}
              </p>
              <p className="font-works-sans mb-5 text-black">{card.area}</p>
              <Link
                to="/#"
                className="bg-[#46237a] border-1 border-[#46237a] px-8 py-2 text-white font-works-sans rounded-md hover:bg-transparent hover:text-[#46237a] transition-all duration-200"
              >
                {card.button.text}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
