import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleBodyOverflow = () => {
      const isDesktop = window.innerWidth >= 768;
      if (showNav && !isDesktop) {
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    };
    handleBodyOverflow();
    window.addEventListener("resize", handleBodyOverflow);
    return () => {
      window.removeEventListener("resize", handleBodyOverflow);
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [showNav]);
  const navLinks = [
    {
      name: "About Me",
      href: "#about",
    },
    {
      name: "My Skills",
      href: "#skills",
    },
    {
      name: "My Projects",
      href: "#projects",
    },
    {
      name: "Contact Me",
      href: "#contact",
    },
  ];
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="z-50 p-5 shadow-[0_0_5px_2px] shadow-blue-500 sticky top-2 md:top-5 mx-2 md:mx-5 rounded-md flex justify-between items-center backdrop-blur-xl"
      >
        <h1 className="font-virgil text-shadow-md text-shadow-blue-500/50 text-2xl lg:text-3xl">
          <a href="#">Iftakhar Ahmed</a>
        </h1>
        <nav className="text-lg hidden lg:flex gap-5 font-ubuntu font-medium ">
          {navLinks.map((navLink) => {
            return (
              <motion.a
                key={navLink.href}
                href={navLink.href}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
              >
                {navLink.name}
              </motion.a>
            );
          })}
        </nav>

        <button
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="block lg:hidden cursor-pointer"
        >
          <List size={24} weight={"bold"} />
        </button>
      </motion.header>

      <AnimatePresence>
        {showNav && (
          <motion.nav
            className="fixed flex flex-col items-center lg:hidden font-ubuntu font-medium h-dvh w-full inset-0 z-50 text-2xl backdrop-blur-xl gap-5 px-5 mask-b-from-70%"
            onClick={(e) => {
              e.stopPropagation();
              setShowNav(false);
            }}
            key={"mobile-nav"}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.2 }}
          >
            <button className="cursor-pointer self-end px-2 py-10">
              <X weight={"bold"} size={24} />
            </button>
            {navLinks.map((navLink) => {
              return (
                <motion.a
                  className="w-full text-center shadow-[0_0_5px_2px] hover:bg-blue-500/50 hover:shadow-none shadow-blue-500/50 rounded-md p-5 text-base"
                  key={navLink.href}
                  href={navLink.href}
                  onClick={() => setShowNav(false)}
                >
                  {navLink.name}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
