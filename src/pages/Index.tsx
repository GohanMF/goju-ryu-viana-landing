import Hero from "@/components/Hero";
import About from "@/components/About";
import Senseis from "@/components/Senseis";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Senseis />
      <Classes />
      <Contact />
    </div>
  );
};

export default Index;
