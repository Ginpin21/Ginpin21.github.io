import { motion } from "framer-motion";
import TailwindLogo from "../../assets/skills/TailwindCSS.png";
import ReactLogo from "../../assets/skills/React.png";
import NextLogo from "../../assets/skills/Next.png";
import NodeLogo from "../../assets/skills/Node.png";
import VueLogo from "../../assets/skills/Vue.png";
import NuxtLogo from "../../assets/skills/Nuxt.png";
import TypescriptLogo from "../../assets/skills/Typescript.png";
import JavascriptLogo from "../../assets/skills/Javascript.png";
import ExpressLogo from "../../assets/skills/Express.png";
import AdonisLogo from "../../assets/skills/Adonis.png";
import SupabaseLogo from "../../assets/skills/Supabase.png";
import PythonLogo from "../../assets/skills/Python.png";
import FastapiLogo from "../../assets/skills/Fastapi.png";
const SkillsSection = () => {
  const skillLogos = [
    TypescriptLogo,
    JavascriptLogo,
    ReactLogo,
    NextLogo,
    VueLogo,
    NuxtLogo,
    TailwindLogo,
    NodeLogo,
    ExpressLogo,
    AdonisLogo,
    SupabaseLogo,
    PythonLogo,
    FastapiLogo,
  ];
  return (
    <motion.section
      id="skills"
      className="font-ubuntu min-h-full relative p-5 container flex flex-col items-center justify-center gap-20 snap-start snap-always"
    >
      <motion.h1
        className="text-5xl font-bold text-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Skills
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 items-center gap-2 w-full place-items-center">
        {skillLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="w-36 h-36 rounded-md border-2 border-transparent hover:border-slate-200 p-5 flex flex-col"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              loading="lazy"
              src={logo}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
