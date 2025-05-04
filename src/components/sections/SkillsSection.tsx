import { motion } from "framer-motion";
import TailwindLogo from "../../assets/skills/TailwindCSS.webp";
import ReactLogo from "../../assets/skills/React.webp";
import NextLogo from "../../assets/skills/Next.webp";
import NodeLogo from "../../assets/skills/Node.webp";
import VueLogo from "../../assets/skills/Vue.webp";
import NuxtLogo from "../../assets/skills/Nuxt.webp";
import TypescriptLogo from "../../assets/skills/Typescript.webp";
import JavascriptLogo from "../../assets/skills/Javascript.webp";
import ExpressLogo from "../../assets/skills/Express.webp";
import AdonisLogo from "../../assets/skills/Adonis.webp";
import SupabaseLogo from "../../assets/skills/Supabase.webp";
import FastifyLogo from "../../assets/skills/Fastify.webp";
import PythonLogo from "../../assets/skills/Python.webp";
import { HandPointing } from "@phosphor-icons/react";
const SkillsSection = () => {
  const skillLogos = [
    {
      logo: TypescriptLogo,
      name: "TypeScript",
      description: "Must use in all JavaScript based projects for me",
    },
    {
      logo: JavascriptLogo,
      name: "JavaScript",
      description: "I mean its the base",
    },
    {
      logo: ReactLogo,
      name: "React",
      description:
        "First frontend framework/library, started from React 17 with CRA",
    },
    {
      logo: NextLogo,
      name: "NextJS",
      description: "First fullstack framework, started with V13 App Router",
    }, // Common usage is Next.js
    {
      logo: VueLogo,
      name: "VueJS",
      description: "Started with Vue 2 work and liked it, started using Vue3",
    }, // Common usage is Vue.js
    {
      logo: NuxtLogo,
      name: "NuxtJS",
      description: "Work website was built on Nuxt 2",
    }, // Common usage is Nuxt.js
    {
      logo: TailwindLogo,
      name: "Tailwind CSS",
      description: "Basically CSS+, whats not to love",
    }, // Common usage is Tailwind CSS
    {
      logo: NodeLogo,
      name: "NodeJS",
      description: "Preferred runtime, would love to start using Bun though",
    }, // Common usage is Node.js
    {
      logo: ExpressLogo,
      name: "ExpressJS",
      description: "Nice backend framework to get you started",
    }, // Common usage is Express.js
    {
      logo: FastifyLogo,
      name: "Fastify",
      description:
        "Best to move here after express, really good plugin ecosystem",
    },
    {
      logo: AdonisLogo,
      name: "AdonisJS",
      description: "If you want Laravel for Node",
    }, // Common usage is AdonisJS
    {
      logo: SupabaseLogo,
      name: "Supabase",
      description: "Better than Firebase, really easy to setup and start",
    },
    {
      logo: PythonLogo,
      name: "Python",
      description:
        "First programming language, learned Pandas and Numpy as well",
    },
  ];
  return (
    <section
      id="skills"
      className="flex flex-col gap-5 p-5 lg:p-10 items-center font-ubuntu overflow-x-hidden bg-gradient-to-b via-teal-950/50"
    >
      <motion.h2
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        className="text-4xl"
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-col items-center justify-between gap-5">
        <motion.p
          initial={{ y: 250 }}
          whileInView={{ y: 0 }}
          className="text-xl text-center leading-10"
          viewport={{ once: true }}
        >
          These are the technologies that I have used in my professional work
          and also in my personal projects.
        </motion.p>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch">
          <motion.span
            className="absolute text-4xl top-10 z-40"
            initial={{ x: -50 }}
            whileInView={{ x: 10, opacity: 0, display: "none" }}
            viewport={{once:true}}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <HandPointing className="rotate-45 text-blue-500" weight="fill" />
          </motion.span>
          {skillLogos.map((logo, index) => {
            return (
              <div key={logo.logo} className="group relative">
                <motion.div
                  className="h-full transition-transform duration-[500ms] z-10 relative flex justify-between items-center gap-5 p-4 rounded-lg group-hover:rotate-y-180 backface-hidden bg-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <p className="text-shadow-md text-shadow-blue-500/50 font-medium">
                    {logo.name}
                  </p>
                  <img
                    src={logo.logo}
                    alt=""
                    className="w-16 drop-shadow-xs drop-shadow-slate-500"
                  />
                </motion.div>
                <motion.div
                  className="h-full transition-transform duration-[500ms] inset-0 absolute flex backface-hidden justify-between items-center gap-5 p-4 rounded-lg rotate-y-180 group-hover:rotate-y-360"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <p>{logo.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
