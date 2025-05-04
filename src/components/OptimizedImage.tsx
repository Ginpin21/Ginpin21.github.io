import React, { useEffect, useRef, useState } from "react";
import cn from "../utils/cn";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;
export default function OptimizedImage({
  className,
  alt = "Image",
  ...rest
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const currentImg = imgRef.current;
    if (!currentImg) return;
    if(currentImg.complete){
      setIsLoading(false);
      return;
    }
    const abortController = new AbortController();
    function onFinishedLoading() {
      setIsLoading(false);
    }
    imgRef.current.addEventListener("load", onFinishedLoading, {
      signal: abortController.signal,
    });
    imgRef.current.addEventListener("error", onFinishedLoading, {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  },[setIsLoading]);

  return (
    <div className="relative inline-block align-middle">
      {isLoading && (
        <LoadingSpinner className="absolute inset-0 m-auto" />
      )}
      <img
        ref={imgRef}
        loading="lazy"
        alt={alt}
        className={cn("block w-full h-full object-contain", className)}
        {...rest}
      />
    </div>
  );
}


function LoadingSpinner({className}:{className:string}){
  return(
    <div className={cn('border-4 border-blue-500 border-t-transparent rounded-full w-5 h-5 animate-spin',className)}>
    </div>
  )
}