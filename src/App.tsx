import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="snap-y overflow-x-hidden overflow-y-scroll h-[100dvh] flex-grow z-0 snap-mandatory scroll-smooth container mx-auto">
      <Nav />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default App;
