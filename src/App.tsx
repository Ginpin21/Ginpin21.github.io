import HomeSection from "./components/sections/HomeSection";
import Nav from "./components/Nav";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
const App = () => {
  
  return (
    <main className="container mx-auto min-h-dvh">
      <Nav />
      <HomeSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
  );
};

export default App;
