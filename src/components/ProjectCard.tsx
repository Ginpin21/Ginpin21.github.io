import { GithubLogo, Globe } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
export type Project = {
  id?: number;
  title: string;
  description: string;
  imgList: string[];
  github: string;
  website: string;
  isPrivate: boolean;
};
const ProjectCard = ({
  title,
  description,
  imgList,
  github,
  website,
  isPrivate,
}: Project) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 rounded-md shadow shadow-black/60 p-5 max-w-[450px]"
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
    >
      {/* <motion.div className="w-full h-72 rounded-t-md">
        <img
          src={img}
          alt=""
          className="object-center object-cover h-full w-full rounded-t-md"
        />
      </motion.div> */}
      <ImageCarousel imgList={imgList} />
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-lg text-center">{description}</p>
      </div>
      {!isPrivate ? (
        <div className="flex justify-between w-full">
          <a
            href={github}
            target="_blank"
            className="flex gap-2 items-center p-2 bg-slate-800 hover:bg-blue-800 text-white rounded-md"
          >
            View Github <GithubLogo size={24} weight="duotone" />
          </a>
          <a
            href={website}
            target="_blank"
            className="flex gap-2 items-center p-2 bg-slate-800 hover:bg-blue-800 text-white rounded-md"
          >
            View Website <Globe size={24} weight="duotone" />
          </a>
        </div>
      ) : (
        <div>Sorry this website is private, cannot share links</div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
