import React, { useState, useEffect } from "react";
import { clients } from "../assets/assets";

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(2);
      } else if (width < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, clients.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleClients = clients.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center py-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <img src="/left.png" alt="next button" className="w-6 h-6" />
          </button>

          <div className="flex gap-4 overflow-hidden">
            {visibleClients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 w-40 h-40 flex items-center justify-center border-1 border-gray-200"
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="max-w-40 max-h-40 object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            <img src="/right.png" alt="next button" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
