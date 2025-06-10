import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className="font-ubuntu relative px-5 lg:px-10 pt-10 flex flex-col md:flex-row items-center justify-center md:justify-center gap-20"
    >
      <div className="flex flex-col gap-5 text-white">
        <motion.h1
          className="text-4xl text-center md:text-left md:text-5xl font-bold text-shadow-sm text-shadow-blue-500/40"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{duration:0.25}}

        >
          Hi there, I am <span className="text-blue-500">IFTAKHAR AHMED</span>
        </motion.h1>
        <motion.p
          className="text-3xl text-center md:text-left font-medium"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{duration:0.25}}
        >
          Full Stack Web Developer <b>|</b> Software Engineer
        </motion.p>
      </div>
      <motion.img
        src={`https://res.cloudinary.com/djuatpgsk/image/upload/Stolen_coat_ujrpwf.webp`}
        loading="lazy"
        alt=""
        className="max-h-[400px] lg:max-h-[600px] mask-b-from-5%"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{duration:0.5}}

      />
    </motion.section>
  );
};

export default HomeSection;
