import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechImages from "@/components/TechImages";
import Technology from "@/components/Technology";
import Models from "@/components/Models";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TechImages />
      <Technology />
      <Models />
      <Advantages />
      <Process />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
