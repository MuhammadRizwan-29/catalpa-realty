import ContactForm from "../components/ContactForm";
import GeneralHero from "../components/GeneralHero";

export default function Contact() {
  return (
    <main>
      <GeneralHero url={"/background/about-hero.jpg"} title={"Contact"} />
      <ContactForm />
    </main>
  );
}
