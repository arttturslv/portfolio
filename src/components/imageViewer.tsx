/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";
interface CustomViewerProps {
  image: {
    src: string;
    title: string;
  } | null;
  closeViewer: () => void;
}

export default function ImageViewer({ image, closeViewer }: CustomViewerProps) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [image]);

  if (!image) return null;

  const handleClose = () => {
    document.body.style.overflow = "auto";

    gsap.to(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
      onComplete: closeViewer,
    });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
  };

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-screen h-screen bg-black/50"
      >
        <img
          className="absolute top-2 right-6 invert"
          src="assets/icon/x.svg"
          alt="close"
        />
      </div>

      <div
        onClick={handleClose}
        className="relative w-full h-full  flex items-center justify-center flex-col"
      >
        <img
          className="relative max-w-[90%] max-h-[90%] object-contain"
          ref={imageRef}
          src={image.src}
          alt={image.title}
        />
        <label className="z-90 invert text-xl py-2" htmlFor="">
          {image.title}
        </label>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
