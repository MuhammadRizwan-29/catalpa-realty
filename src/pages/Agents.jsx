import AgentsSection from "../components/AgentsSection";
import GeneralHero from "./../components/GeneralHero";

export default function Agents() {
  return (
    <main>
      <GeneralHero url={"/background/agents-hero.jpg"} title={"Agents"} />
      <AgentsSection />
    </main>
  );
}
