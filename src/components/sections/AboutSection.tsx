import { CaretCircleUp, CaretCircleDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="font-ubuntu container h-full snap-start snap-always flex flex-col items-center justify-center gap-5 relative"
    >
      <a href="#home" className="absolute right-2 top-10 hover:text-blue-800">
        <CaretCircleUp size={36} weight="duotone" />
      </a>
      <a
        href="#skills"
        className="absolute right-2 bottom-10 hover:text-blue-800"
      >
        <CaretCircleDown size={36} weight="duotone" />
      </a>

      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0, rotate: 30 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className="hidden md:block font-virgil text-xl absolute md:top-20 md:right-20"
      >
        Web Development 🤓🌐
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0, rotate: -30 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className=" hidden md:block font-virgil text-xl absolute md:top-20 left-20"
      >
        App Development 🤓📱
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className="block md:hidden font-virgil text-xl absolute top-20 right-1/4"
      >
        Web Development 🤓🌐
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className=" block md:hidden font-virgil text-xl absolute bottom-20 left-1/4"
      >
        App Development 🤓📱
      </motion.p>
      <motion.h1
        className="text-5xl font-bold text-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl md:text-3xl md:w-1/2 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        I am a <b>Full Stack Web Developer</b> and a <b>Software Engineer </b>
        who graduated from the University of Bolton. <br /> My main focus is on
        building web and mobile applications, while I am also learning about
        cloud technologies.
      </motion.p>
    </motion.section>
  );
};

export default AboutSection;
