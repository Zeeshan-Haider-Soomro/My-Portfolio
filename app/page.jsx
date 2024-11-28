
import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Services from "@/components/Services";
import Contact from "./contact/page";

export default function Home() {
  return (
 <main>
  <Hero />
  <About/>
  <Services/>
  <Work/>
  <Cta/>
  <Contact/>
 </main>
  );
}
