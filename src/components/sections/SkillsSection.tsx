import { CaretCircleUp, CaretCircleDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import TailwindLogo from "../../assets/skills/TailwindCSS.png";
import ReactLogo from "../../assets/skills/React.png";
import NextLogo from "../../assets/skills/Next.png";
import NodeLogo from "../../assets/skills/Node.png";
import VueLogo from "../../assets/skills/Vue.png";
import NuxtLogo from "../../assets/skills/Nuxt.png";
import TypescriptLogo from "../../assets/skills/Typescript.png";
import ExpressLogo from "../../assets/skills/Express.png";
import SupabaseLogo from "../../assets/skills/Supabase.png";
const SkillsSection = () => {
  const skillLogos = [
    ReactLogo,
    NextLogo,
    TailwindLogo,
    VueLogo,
    NuxtLogo,

    NodeLogo,
    ExpressLogo,

    TypescriptLogo,
    SupabaseLogo,
  ];
  return (
    <motion.section
      id="skills"
      className="font-ubuntu h-full relative p-5 container flex  items-center justify-center gap-20 snap-start snap-always"
    >
      <a href="#about" className="absolute right-2 top-10 hover:text-blue-800">
        <CaretCircleUp size={36} weight="duotone" />
      </a>
      <a
        href="#projects"
        className="absolute right-2 bottom-10 hover:text-blue-800"
      >
        <CaretCircleDown size={36} weight="duotone" />
      </a>
      <motion.h1
        className="text-5xl font-bold text-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-3 items-center gap-5">
        {skillLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            className="w-36"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
