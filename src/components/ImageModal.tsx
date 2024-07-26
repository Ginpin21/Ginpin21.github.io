import { X as PhosphorClose } from "@phosphor-icons/react";
type Props = {
  imgURL: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const ImageModal = ({ imgURL, isOpen, setIsOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-[1000] bg-black/50"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <PhosphorClose size={24} weight="bold" />
          </button>
          <div
            className="w-full md:w-3/4 h-full relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
              src={imgURL}
              loading="lazy"
              alt=""
              className="h-full w-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
