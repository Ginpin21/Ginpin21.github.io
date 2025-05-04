import HomeSection from "./components/sections/HomeSection";
import Nav from "./components/Nav";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectSection from "./components/sections/ProjectSection";
import ContactSection from "./components/sections/ContactSection";
const App = () => {
  
  return (
    <main className="container mx-auto bg-slate-300 dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-dvh">
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
