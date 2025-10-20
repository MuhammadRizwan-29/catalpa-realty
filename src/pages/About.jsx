import GeneralHero from "../components/GeneralHero";
import OurMission from "../components/OurMission";
import OurCompany from "../components/OurCompany";
import Stats from "../components/Stats";

export default function About() {
  return (
    <main>
      <GeneralHero url={"/background/about-hero.jpg"} title={"About Us"} />
      <OurCompany />
      <OurMission />
      <Stats />
    </main>
  );
}
