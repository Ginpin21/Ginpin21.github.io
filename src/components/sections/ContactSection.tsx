import {
  Envelope,
  Phone,
  WhatsappLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="font-ubuntu container h-full snap-start snap-always flex flex-col items-center justify-center gap-5 relative"
    >
      {/* <a
        href="#projects"
        className="absolute right-2 top-10 hover:text-blue-800"
      >
        <CaretCircleUp size={24} weight="duotone" />
      </a> */}

      <motion.h1
        className="text-5xl font-bold text-blue-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex gap-2 items-center text-blue-900 text-xl font-ubuntu font-medium md:border-r-2 border-slate-300 px-2 hover:font-bold active:font-bold">
          <Envelope size={24} weight="duotone" />
          <a href="mailto:iftekharahmed2003@gmail">
            iftekharahmed2003@gmail.com
          </a>
        </div>
        <div className="flex gap-2 items-center text-blue-900 text-xl font-ubuntu font-medium md:border-r-2 border-slate-300 px-2 hover:font-bold active:font-bold">
          <Phone size={24} weight="duotone" /> &
          <WhatsappLogo size={24} weight="duotone" />
          <a href="tel:+971545049398">+971 54 50 49 398</a>
        </div>
        <div className="flex gap-2 items-center text-blue-900 text-xl font-ubuntu font-medium md:border-r-2 border-slate-300 px-2 hover:font-bold active:font-bold">
          <GithubLogo size={24} weight="duotone" />
          <a href="https://github.com/ginpin21" target="_blank">
            Ginpin21
          </a>
        </div>
        <div className="flex gap-2 items-center text-blue-900 text-xl font-ubuntu font-medium hover:font-bold active:font-bold">
          <LinkedinLogo size={24} weight="duotone" />
          <a
            href="https://www.linkedin.com/in/iftekhar-ahmed-b07b8a22a/"
            target="_blank"
          >
            Iftakhar Ahmed
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
