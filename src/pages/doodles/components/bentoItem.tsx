/** @format */

import React from "react";
import ImageViewer from "../../../components/imageViewer";

interface BentoItemProps {
  size: "large" | "medium" | "small";
  srcImage: string;
  date: string;
  title: string;
  fluid?: boolean;
}

export default function BentoItem({
  size,
  srcImage,
  date,
  fluid = false,
  title,
}: BentoItemProps) {
  const [imageSelected, setImageSelected] = React.useState<{
    src: string;
    title: string;
  } | null>(null);

  const openViewer = (srcImage: string, title: string) => {
    setImageSelected({ src: srcImage, title: title });
  };
  const closeViewer = () => {
    setImageSelected(null);
  };

  const sizeStyle = () => {
    if (fluid) return "w-full h-full";
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
      <ImageViewer
        image={imageSelected}
        closeViewer={closeViewer}
      ></ImageViewer>
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
            onClick={() => openViewer(srcImage, title)}
            className="w-full  group-hover:scale-105 object-cover transition-all duration-700 "
            src={srcImage}
          />
        </div>
      </div>
    </>
  );
}
