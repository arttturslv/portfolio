/** @format */

import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../routes/routes";
import ReactDOM from "react-dom";
import React from "react";
import { gsap } from "gsap";

interface BentoItemProps {
  size: "large" | "medium" | "small";
  srcImage: string;
  date: string;
  title: string;
  fluid?: boolean; // quando true, ignora tamanhos fixos e usa w/h 100%
}

export default function BentoItem({
  size,
  srcImage,
  date,
  fluid = false,
  title,
}: BentoItemProps) {
  const { isDark } = useContext(ThemeContext);
  const [imageSelected, setImageSelected] = React.useState<string | null>(null);

  const openViewer = (srcImage: string) => {
    setImageSelected(srcImage);
  };
  const closeViewer = () => {
    setImageSelected(null);
  };

  const sizeStyle = () => {
    if (fluid) return "w-full h-full"; // preenchimento total da célula da grid
    switch (size) {
      case "large":
        return "min-w-[50vw] min-h-[50vw] lg:w-[50vw] lg:h-[60vw] h-[70vw] bg-red";
      case "medium":
        return "lg:h-full h-[50vw] bg-green";
      case "small":
        return "lg:h-[20vw] w-[50vw] h-[50vw] bg-blue";
      default:
        return "lg:h-[20vw] w-[50vw] h-[50vw] bg-blue";
    }
  };

  return (
    <>
      <Viewer image={imageSelected} closeViewer={closeViewer}></Viewer>
      <div
        className={` relative group rounded-xl hover:rounded-4xl transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden ${sizeStyle()}`}
      >
        <span
          className={` absolute  z-50 top-3   mix-blend-difference text-white flex justify-between w-[90%]  left-4 text-sm transition-all duration-400 `}
        >
          <label>{date}</label>
          <label>{title}</label>
        </span>
        <div className="w-full flex justify-center h-full">
          <img
            onClick={() => openViewer(srcImage)}
            className="w-full  group-hover:scale-105 object-cover transition-all duration-700 "
            src={srcImage}
          />
        </div>
      </div>
    </>
  );
}

interface CustomViewerProps {
  image: string | null;
  closeViewer: () => void;
}

const Viewer = ({ image, closeViewer }: CustomViewerProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
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
      {/* overlay com ref */}
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

      {/* imagem com ref */}
      <img
        ref={imageRef}
        className="relative max-w-[90%] max-h-[90%] object-contain"
        src={image}
        alt="viewer"
      />
    </div>,
    document.getElementById("root") as HTMLElement
  );
};
