import Hero from "@/components/Hero/Hero";
import Contacts from "@/components/Contacts/Contacts";
import About from "@/components/About/About";
import Career from "@/components/Career/Career";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
