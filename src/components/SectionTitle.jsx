export default function SectionTitle({ subTitle, title, theme }) {
  return (
    <div
      className={`uppercase font-yanone text-center ${
        theme === "dark" ? "text-[#46237a]" : "text-white"
      }`}
    >
      <p className="text-2xl pb-6">{subTitle}</p>
      <h2 className="text-5xl sm:text-7xl pb-6">{title}</h2>
      <hr
        className={`w-14 border-2 mx-auto ${
          theme === "dark" ? "border-[#46237a]" : "border-white"
        }`}
      />
    </div>
  );
}
