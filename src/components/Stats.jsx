import { useEffect, useState } from "react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-4xl sm:text-6xl font-bold">
      {count.toLocaleString()}+
    </div>
  );
};

export default function Stats() {
  return (
    <section
      className="relative py-[50px] sm:py-[100px] bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(/background/window-sofa.jpg)` }}
    >
      <div className="absolute inset-0 bg-[#46237a]/80"></div>
      <div className="max-w-6xl mx-auto py-4 relative z-10 px-4 xl:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-5 justify-center items-center">
          <div className="flex flex-col items-center justify-center text-white gap-4">
            <hr className="w-10 sm:w-12 mx-auto border-2" />
            <Counter target={1550} />
            <span className="text-xl text-center">Apartments Sold</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-4">
            <hr className="w-10 sm:w-12 mx-auto border-2" />
            <Counter target={4300} />
            <span className="text-xl text-center">Satisfied Clients</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-4">
            <hr className="w-10 sm:w-12 mx-auto border-2" />
            <Counter target={2380} />
            <span className="text-xl text-center">Houses Rented</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-4">
            <hr className="w-10 sm:w-12 mx-auto border-2" />
            <Counter target={13500} />
            <span className="text-xl text-center">Listed Properties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
