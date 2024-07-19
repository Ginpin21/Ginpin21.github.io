import { CaretCircleDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import portraitURL from "./../../assets/Stolen_coat.png";

const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className="font-ubuntu h-full relative px-5 container flex flex-col md:flex-row items-center justify-end md:justify-center gap-20 snap-start snap-always"
    >
      <a
        href="#about"
        className="absolute right-2 bottom-10 hover:text-blue-800"
      >
        <CaretCircleDown size={36} weight="duotone" />
      </a>
      <div className="flex flex-col gap-5">
        <motion.h1
          className="text-4xl text-center md:text-left md:text-5xl font-bold"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          Hi there, I am <span className="text-blue-800">IFTAKHAR AHMED</span>
        </motion.h1>
        <motion.p
          className="text-3xl text-center md:text-left"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          Full Stack Web Developer <b>|</b> Software Engineer
        </motion.p>
      </div>
      <motion.img
        src={portraitURL}
        alt=""
        className="md:max-h-[700px] max-h-[400px] md:min-h-96 md:self-end"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      />
    </motion.section>
  );
};

export default HomeSection;
