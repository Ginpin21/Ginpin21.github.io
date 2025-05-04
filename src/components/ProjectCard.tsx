import {
  CaretLeft,
  CaretRight,
  Globe,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import OptimizedImage from "./OptimizedImage";
export type Project = {
  id?: number;
  title: string;
  description: string;
  imgList: string[];
  website: string;
  isPrivate: boolean;
};
const ProjectCard = ({
  title,
  description,
  imgList,
  website,
  isPrivate,
}: Project) => {
  return (
    <motion.div
      className="flex gap-5 flex-col lg:flex-row items-center rounded-md relative shadow-[0_0_5px_2px] shadow-blue-500/20 lg:p-5"
      initial={{ x: 250 }}
      whileInView={{ x: 0 }}
    >
      <ProjectImages imgList={imgList} />
      <div className="lg:w-1/2 h-full flex flex-col items-stretch justify-between gap-2 text-center p-5">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-lg text-justify whitespace-pre-line">{description}</p>
        {!isPrivate ? (
         
          <a
            href={website}
            target="_blank"
            className="flex gap-2 justify-center items-center p-2 bg-slate-800 hover:bg-blue-800 text-white rounded-md"
          >
            View Website <Globe size={24} weight="duotone" />
          </a>
      ) : (
        <div>Sorry this website is private, cannot share links</div>
      )}
      </div>
      
    </motion.div>
  );
};

function ProjectImages({ imgList }: { imgList: Project["imgList"] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  );
  const changeImage = (next:boolean)=>{
    const limit= imgList.length
    if(next){
      if(currentImageIndex<limit-1){
        setCurrentImageIndex((prev)=>prev+1)
      } else{
        setCurrentImageIndex(0);
      }
    } else{
      if(currentImageIndex>0){
        setCurrentImageIndex((prev)=>prev-1)
      } else{
        setCurrentImageIndex(limit-1);
      }
    }
  }
  useEffect(() => {
    if (!portalContainer) {
      const newDiv = document.createElement("div");
      newDiv.id = "portal-container";
      document.body.prepend(newDiv);
      setPortalContainer(newDiv);
    }
  }, [portalContainer]);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [showModal]);
  return (
    <div className="lg:w-3/4 flex flex-col items-start gap-2 p-2">
      <OptimizedImage
        src={imgList[currentImageIndex]}
        alt=""
        className="w-full h-96 rounded-md object-contain bg-black/20 cursor-pointer"
        onClick={() => setShowModal(true)}
      />
      {showModal &&
        portalContainer &&
        createPortal(
          <div
            className="p-5 lg:p-28 z-[100] h-screen w-full fixed bg-black/50 flex items-center justify-center"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button className="z-50 cursor-pointer group absolute text-3xl lg:text-5xl text-white -bottom-10 -left-2 lg:bottom-1/2 lg:top-1/2 lg:left-5" onClick={()=>changeImage(false)}>
                <CaretLeft className="bg-blue-500/70 group-hover:bg-blue-500 rounded-full p-2"/>
              </button>
              <OptimizedImage
                src={imgList[currentImageIndex]}
                alt=""
                className="rounded-md"
              />
              <button className="z-50 cursor-pointer group absolute text-3xl lg:text-5xl text-white -bottom-10 -right-2 lg:bottom-1/2 lg:top-1/2 lg:right-5" onClick={()=>changeImage(true)}>
                <CaretRight className="bg-blue-500/70 group-hover:bg-blue-500 rounded-full p-2"/>
              </button>
            </div>
          </div>,
          portalContainer
        )}
      <div className="flex gap-1 justify-center-safe overflow-x-auto pb-2">
        {imgList.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt=""
              className={`w-32 h-full rounded-md cursor-pointer border-4 ${currentImageIndex===index ? ' border-blue-500' :'border-transparent'}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
