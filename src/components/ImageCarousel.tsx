import { useState } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./ImageModal";
type Props = {
  imgList: string[];
};
const ImageCarousel = ({ imgList }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeImageIndex = (increase: boolean) => {
    setDirection(increase ? 1 : -1);
    if (increase) {
      if (currentIndex === imgList.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex === 0) {
        setCurrentIndex(imgList.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };
  if (imgList.length === 0) {
    return null;
  } else {
    return (
      <>
        <AnimatePresence initial={false}>
          <div className="relative">
            <button
              className="flex items-center bg-white rounded-full p-2 shadow shadow-black/50 z-10 hover:bg-black hover:text-white absolute top-1/2 left-2"
              onClick={() => changeImageIndex(false)}
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <div className="w-full h-64 rounded-md overflow-hidden">
              {imgList.map((img, index) => {
                return (
                  index === currentIndex && (
                    <motion.img
                      key={index}
                      loading="lazy"
                      src={img}
                      initial={{
                        opacity: 0,
                        x: direction * 500,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -direction * 500 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.2,
                      }}
                      alt=""
                      onClick={() => setIsModalOpen(true)}
                      className="object-cover h-full w-full rounded-md hover:cursor-pointer"
                    />
                  )
                );
              })}
            </div>
            <button
              className="flex items-center bg-white rounded-full p-2 shadow shadow-black/50 z-10 hover:bg-black hover:text-white absolute top-1/2 right-2"
              onClick={() => changeImageIndex(true)}
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </AnimatePresence>
        <ImageModal
          imgURL={imgList[currentIndex]}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      </>
    );
  }
};

export default ImageCarousel;
