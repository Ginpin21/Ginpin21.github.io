import { X, List } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store/ui";
const Nav = () => {
  const { showNav } = useUIStore();
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
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
      <AnimatePresence>
        {showNav && (
          <motion.nav
            className="h-screen flex flex-col items-center gap-5 sticky top-0 z-50 bg-blue-900 text-white text-xl p-3 font-ubuntu font-medium"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "400px", opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ width: 0, opacity: 0 }}
          >
            <button
              className="self-end"
              onClick={() => useUIStore.setState({ showNav: false })}
            >
              <X weight="bold" />
            </button>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{
                  borderBottom: "1px solid transparent",
                }}
                whileHover={{
                  scale: 1.1,
                  borderBottom: "2px solid white",
                }}
                transition={{ duration: 0.2 }}
                onClick={() => useUIStore.setState({ showNav: false })}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      {!showNav && (
        <button
          className="text-blue-900 text-3xl z-50 fixed top-5 left-5"
          onClick={() => useUIStore.setState({ showNav: true })}
        >
          <List weight="bold" />
        </button>
      )}
    </>
  );
};

export default Nav;
