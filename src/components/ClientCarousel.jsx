import { useEffect, useState } from "react";
import { clients } from "../assets/assets";

export default function ClientCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [scrollStep, setScrollStep] = useState(1);

  const updateSettings = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCount(2); // Show 2 logos on mobile
      setScrollStep(1); // Scroll 1 logo at a time
    } else if (width < 1024) {
      setVisibleCount(3);
      setScrollStep(1);
    } else {
      setVisibleCount(5);
      setScrollStep(1);
    }
    setStartIndex(0); // Reset position on resize
  };

  useEffect(() => {
    updateSettings(); // Set on mount
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - scrollStep));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + scrollStep, clients.length - 1));
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto py-10 relative z-10 px-4 xl:px-0">
        <p className="font-yanone text-2xl uppercase text-[#46237a] text-center">
          Trusted By
        </p>

        <div className="flex items-center px-2 gap-4 my-4">
          <button
            className="w-8 h-8 object-cover disabled:opacity-30"
            disabled={startIndex === 0}
            onClick={handlePrev}
          >
            <img src="./left.png" alt="Previous" className="cursor-pointer" />
          </button>
          <div className="overflow-hidden w-full">
            <div
              className="flex items-center justify-center transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleCount) * startIndex}%)`,
                width: `${(clients.length * 100) / visibleCount}%`,
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <img
                    src={client.image}
                    alt={client.alt}
                    className="border-1 border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="w-8 h-8 object-cover disabled:opacity-30"
            disabled={startIndex >= clients.length - 1}
            onClick={handleNext}
          >
            <img src="./right.png" alt="Next" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
}
