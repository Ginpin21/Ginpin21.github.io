import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="font-ubuntu relative px-5 lg:px-10 pt-10 pb-30 flex flex-col  items-center justify-center gap-10 bg-gradient-to-t from-cyan-900/50"
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        className="text-4xl"
        viewport={{ once: true }}
      >
        Get in touch
      </motion.h2>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        className="flex flex-col items-center lg:flex-row gap-5 text-xl lg:text-2xl text-cyan-200"
      >
        <a
          target="_blank"
          href="mailto:iftekarahmed2003@gmail.com"
          className="flex gap-2 items-center hover:text-cyan-700 active:text-cyan-700"
        >
          <EnvelopeSimple weight="duotone" size={30} />
          <p>iftekarahmed2003@gmail.com</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iftekharahmed21/"
          className="flex gap-2 items-center hover:text-cyan-700 active:text-cyan-700"
        >
          <LinkedinLogo weight="duotone" />
          <p>Iftakhar Ahmed</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/Ginpin21"
          className="flex gap-2 items-center hover:text-cyan-700 active:text-cyan-700"
        >
          <GithubLogo weight="duotone" />
          <p>Ginpin21</p>
        </a>
      </motion.div>
      <motion.h2 initial={{ y: 50 }} whileInView={{ y: 0 }} whileHover={{scale:1.1}} className="text-center">
        <a target="_blank" href="/CV.pdf">Want to know more? <br className="lg:hidden"/>Get my CV <span className="underline">here</span></a>
      </motion.h2>
    </section>
  );
};

export default ContactSection;
