import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard";
import SwiftLMSImages from "../images/SwiftLMSImages";
import WincLibMgmtImages from "../images/WincLibMgmtImages";
import WincCatalogueImages from "../images/WincCatalogueImages";
import ABCRestaurantImages from "../images/ABCRestaurantImages";
import PluginElectronicsImages from "../images/PluginElectronicsImages";
const ProjectSection = () => {
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
      imgList: SwiftLMSImages,
      website: "https://swift-lms.vercel.app/",
      isPrivate: false,
    },
    {
      title: "WINC E-Catalogue",
      description: `WINC E-Catalogue is a digital database of all the physical books available at the WINC RAK Campus Library. Made to help staff and and students find books and check their availability easily. Powered by React and Supabase.
      
      - 5000+ books
      - Detailed book information like ISBN and covers from open-library
      - Search engine to filter by subject,title or author
      - Local favourites to keep track of any books you like`,
      imgList: WincCatalogueImages,
      website: "https://winc-catalogue.netlify.app/",
      isPrivate: false,
    },
    {
      title: "WINC Library Management",
      description: `WINC Library Management is a web based library management system created with NextJS 14 and Tailwind CSS to allow for an easy to use interface. Powering the backend is Supabase.
      
      - Add new books
      - Register new members
      - Issue books to members
      - Search engine to find specific books to help members`,
      imgList: WincLibMgmtImages,
      website: "https://winc-library.vercel.app/",
      isPrivate: false,
    },
    {
      title: "ABC Restaurant",
      description: `Restaurant website created with React and Tailwind CSS in the frontend to allow for an easy to use interface. Powered by MongoDB and ExpressJS in the backend.
      
      - Menu with sorting and filtering to find your favourite meal
      - Ordering system to deliver food to your doorstep
      - Reservation system to book your table beforehand`,
      imgList: ABCRestaurantImages,
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
