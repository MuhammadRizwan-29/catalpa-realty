import FaqSection from "../components/FaqSection";
import GeneralHero from "./../components/GeneralHero";
import CallToAction from "./../components/CallToAction";

export default function FAQ() {
  return (
    <main>
      <GeneralHero url={"/background/faq-hero.jpg"} title={"FAQ"} />
      <FaqSection />
      <CallToAction />
    </main>
  );
}
