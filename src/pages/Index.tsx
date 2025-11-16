import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Models from "@/components/Models";
import Projects from "@/components/Projects";
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
      <Technology />
      <Models />
      <Projects />
      <Advantages />
      <Process />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
