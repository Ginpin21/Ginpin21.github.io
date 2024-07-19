import { CaretCircleUp, CaretCircleDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard";
import { Project } from "../ProjectCard";
import SwiftLMSImages from "../images/SwiftLMSImages";
import WincLibMgmtImages from "../images/WincLibMgmtImages";
import ABCRestaurantImages from "../images/ABCRestaurantImages";
const ProjectSection = () => {
  const swiftLMSImages = SwiftLMSImages;
  const wincLibMgmtImages = WincLibMgmtImages;
  const abcRestaurantImages = ABCRestaurantImages;
  const projects = [
    {
      id: 0,
      title: "Swift LMS",
      description: `Swift LMS is a web based learning management system.
              Leveraging the power of NextJS 14 and Tailwind CSS
              to deliver a modern and intuitive user experience with SSR and
              responsive design.`,
      imgList: swiftLMSImages,
      github: "https://github.com/ginpin21/swift-lms",
      website: "https://swift-lms.vercel.app/",
      isPrivate: false,
    },
    {
      id: 1,
      title: "WINC Library Management",
      description: `WINC Library Management is a web based library management system created with NextJS 14 and Tailwind CSS to allow for an easy to use interface. Powering the backend is Supabase.`,
      imgList: wincLibMgmtImages,
      github: "https://github.com/ginpin21/swift-lms",
      website: "https://swift-lms.vercel.app/",
      isPrivate: true,
    },
    {
      id: 2,
      title: "ABC Restaurant",
      description: `ABC Restaurant is a restaurant website that allows for users to order food online and make reservations. It is created with React and Tailwind CSS to allow for an easy to use interface. Powered by MongoDB and ExpressJS in the backend.`,
      imgList: abcRestaurantImages,
      github: "https://github.com/Ginpin21/ABC-Restaurant-client",
      website: "https://abc-restaurant-1.netlify.app/",
      isPrivate: false,
    },
  ];
  return (
    <motion.section
      id="projects"
      className="font-ubuntu container min-h-screen snap-start snap-always flex flex-col items-center gap-10 relative p-5"
    >
      <a
        href="#skills"
        className="absolute right-2 top-10 hover:text-blue-800 z-50"
      >
        <CaretCircleUp size={36} weight="duotone" />
      </a>
      <a
        href="#contact"
        className="absolute right-2 bottom-10 hover:text-blue-800 z-50"
      >
        <CaretCircleDown size={36} weight="duotone" />
      </a>
      <motion.h1
        className="text-5xl font-bold text-blue-800 mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Projects Showcase
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-between gap-5 w-full md:px-10">
        {projects.length > 0 &&
          projects.map((project: Project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
