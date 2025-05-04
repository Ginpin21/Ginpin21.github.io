import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
        id="about"
        className="flex flex-col gap-5 p-5 lg:p-10 items-center font-ubuntu overflow-x-hidden bg-gradient-to-t via-slate-900"
      >
        <motion.h2
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          viewport={{once:true}}
          className="text-4xl"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
          <motion.p
            initial={{ x: 250 }}
            whileInView={{ x: 0 }}
            className="text-xl text-center leading-10"
          >
            I am Full Stack Web Developer with 2 years of experience working in
            the UAE with technologies such as NextJS, ReactJS, VueJS, NuxtJS,
            ExpressJS, Fastify and more.
            <br />
            Graduated with a First Class Honors in Software Engineering from the
            University of Bolton.
            <br />I am very passionate about new technologies, both hardware and
            software.
          </motion.p>
          <motion.img
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{duration:0.5}}
            src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
            alt=""
            className="rounded-xl mask-b-from-20% lg:mask-y-from-90% lg:mask-l-from-50% lg:h-[400px] w-full lg:w-1/2"
          />
        </div>
      </section>
  );
};

export default AboutSection;
