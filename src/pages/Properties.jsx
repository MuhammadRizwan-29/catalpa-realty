import GeneralHero from "../components/GeneralHero";
import SectionTitle from "../components/SectionTitle";
import { houses, apartments, offices } from "../assets/assets";
import CardsSection from "../components/CardsSection";

export default function Properties() {
  return (
    <main>
      <GeneralHero
        url={"/background/properties-hero.jpg"}
        title={"Properties"}
      />
      {/* Apartments */}
      <CardsSection
        subTitle={"Find Your Perfect Home"}
        title={"Nice Apartments"}
        items={6}
        data={apartments}
      />
      {/* Houses */}
      <CardsSection
        subTitle={"Find Your Perfect Home"}
        title={"Attractive Houses"}
        items={6}
        data={houses}
      />
      {/* Offices */}
      <CardsSection
        subTitle={"Find Your Perfect Home"}
        title={"Best Offices"}
        items={6}
        data={offices}
      />
    </main>
  );
}
