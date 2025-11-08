import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import VisionMission from "@/components/vision-mission";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
