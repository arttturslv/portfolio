/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";

interface CustomViewerProps {
  image: string | null;
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
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
      <div
        ref={overlayRef}
        onClick={handleClose}
        className="absolute top-0 left-0 w-screen h-screen bg-black/50"
      >
        <img
          className="absolute top-2 right-6 invert"
          src="assets/icon/x.svg"
        />
      </div>

      <img
        ref={imageRef}
        className="relative max-w-[90%] max-h-[90%] object-contain"
        src={image}
        alt="viewer"
      />
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
