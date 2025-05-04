import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="font-ubuntu relative px-5 lg:px-10 pt-10 pb-30 flex flex-col  items-center justify-center md:justify-center gap-10 bg-gradient-to-t from-cyan-900/50"
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
        className="flex flex-col items-start lg:flex-row gap-5 text-2xl text-cyan-200"
      >
        <a
          target="_blank"
          href="mailto:iftekarahmed2003@gmail.com"
          className="flex gap-2 items-center hover:text-cyan-700"
        >
          <EnvelopeSimple weight="duotone" size={30} />
          <p>iftekarahmed2003@gmail.com</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/iftekharahmed21/"
          className="flex gap-2 items-center hover:text-cyan-700"
        >
          <LinkedinLogo weight="duotone" />
          <p>Iftakhar Ahmed</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/Ginpin21"
          className="flex gap-2 items-center hover:text-cyan-700"
        >
          <GithubLogo weight="duotone" />
          <p>Ginpin21</p>
        </a>
      </motion.div>
      <motion.h2 initial={{ y: 50 }} whileInView={{ y: 0 }}>
        <a target="_blank" href="/CV.pdf">Want to know more? Get my CV here</a>
      </motion.h2>
    </motion.section>
  );
};

export default ContactSection;
