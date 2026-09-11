import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prestations from "./components/Prestations";
import Realisations from "./components/Realisations";

export default function Home() {
  return (
    <div className="bg-[#18293E]">
      <Header />
      <Hero />
      <Prestations/>
      <APropos/>
      <Realisations/>
      <Contact/>
      <Footer />
    </div>
  );
}
