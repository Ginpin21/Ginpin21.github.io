import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard";
import SwiftLMSImages from "../images/SwiftLMSImages";
import WincLibMgmtImages from "../images/WincLibMgmtImages";
import ABCRestaurantImages from "../images/ABCRestaurantImages";
import PluginElectronicsImages from "../images/PluginElectronicsImages";
const ProjectSection = () => {
  const swiftLMSImages = SwiftLMSImages;
  const wincLibMgmtImages = WincLibMgmtImages;
  const abcRestaurantImages = ABCRestaurantImages;
  const projects = [
    {
      title: "Plugin Electronics",
      description: `Plugin Electronics is an online e-commerce platform to purchase electronics at an affordable price. Store website powered by NextJS 14 and admin panel by Vue 3 all connected through an Express backend.

              - E-Commerce Website for an electronics gadgets store
              - 3 Step Customer onboarding
              - Search and filter products
              - Client side cart functionality
              - Checkout functionality and delivery
`,
      imgList: PluginElectronicsImages,
      website: "https://plugin-electronics.vercel.app/",
      isPrivate: false,
    },
    {
      title: "Swift LMS",
      description: `Swift LMS is a web based learning management system.
              Leveraging the power of NextJS 14 and Tailwind CSS to deliver a modern and intuitive user experience with SSR and responsive design.

              - Role Based Access Control with 3 roles; Admin, Teacher and Student
              - Upload Assignments and assignment submissions
              - Realtime chat feature and a discussion board for subjects`,
      imgList: swiftLMSImages,
      website: "https://swift-lms.vercel.app/",
      isPrivate: false,
    },
    {
      title: "WINC Library Management",
      description: `WINC Library Management is a web based library management system created with NextJS 14 and Tailwind CSS to allow for an easy to use interface. Powering the backend is Supabase.
      
      - Add new books
      - Register new members
      - Issue books to members
      - Search engine to find specific books to help members`,
      imgList: wincLibMgmtImages,
      website: "https://swift-lms.vercel.app/",
      isPrivate: false,
    },
    {
      title: "ABC Restaurant",
      description: `ABC Restaurant is a restaurant website that allows for users to order food online and make reservations. It is created with React and Tailwind CSS to allow for an easy to use interface. Powered by MongoDB and ExpressJS in the backend.`,
      imgList: abcRestaurantImages,
      website: "https://abc-restaurant-1.netlify.app/",
      isPrivate: false,
    },
  ];
  return (
    <section
      id="projects"
      className="bg-gradient-to-b via-violet-900/50 flex flex-col gap-5 p-5 lg:p-10 items-center font-ubuntu overflow-x-hidden"
    >
      <motion.h2
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        className="text-4xl"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="space-y-10">
        {projects.map((project, index) => {
          return <ProjectCard {...project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
