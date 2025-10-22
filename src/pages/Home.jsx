import { houses, offices } from "../assets/assets";
import HomeHero from "../components/HomeHero";
import CardsSection from "../components/CardsSection";
import WhoWeAre from "../components/WhoWeAre";
import LookingForSection from "../components/LookingForSection";
import ClientCarousel from "../components/ClientCarousel";
import CallToAction from "../components/CallToAction";
import Carosel from "../components/Carosel";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <CardsSection
        subTitle={"Featured Listings"}
        title={"Find Your Perfect Home"}
        items={3}
        data={houses}
      />
      <WhoWeAre />
      <CardsSection
        subTitle={"Find Your Perfect Home"}
        title={"Unique Listings"}
        items={6}
        data={offices}
      />
      <LookingForSection />
      {/* <ClientCarousel /> */}
      <Carosel />
      <CallToAction />
    </main>
  );
}
