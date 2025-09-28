/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "../../../components/imageViewer";
import WaveformPlayer from "../../../components/Wave";

interface BentoItemProps {
  size: "large" | "medium" | "small";
  type: "image" | "audio";
  src: string;
  date: string;
  title: string;
  fluid?: boolean;
}

export default function BentoItem({
  size,
  type,
  src,
  date,
  title,
  fluid = false,
}: BentoItemProps) {
  const [imageSelected, setImageSelected] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [loaded, setLoaded] = useState(false);

  const openViewer = () => setImageSelected({ src, title });
  const closeViewer = () => setImageSelected(null);

  const sizeStyle = () => {
    if (fluid) return "w-full h-full min-h-[200px]";
    switch (size) {
      case "large":
        return "lg:w-[50vw] lg:h-[60vw] min-h-[300px]";
      case "medium":
        return "lg:h-[50vw] min-h-[250px]";
      case "small":
        return "lg:h-[20vw] w-[50vw] min-h-[150px]";
      default:
        return "lg:h-[20vw] w-[50vw] min-h-[150px]";
    }
  };

  return (
    <>
      {type === "image" && (
        <ImageViewer image={imageSelected} closeViewer={closeViewer} />
      )}
      <div
        className={`fade-element relative group rounded-xl hover:rounded-4xl transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden ${sizeStyle()}`}
      >
        <span className="absolute z-50 top-3 mix-blend-difference text-white flex justify-between w-[90%] left-4 text-sm">
          <label>{date}</label>
          <label>{title}</label>
        </span>
        <div className="w-full h-full flex justify-center items-center">
          {type === "image" ? (
            <Image
              src={src}
              alt={title}
              fill
              className={`object-cover transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
              onClick={openViewer}
            />
          ) : (
            <div className="bg-white w-full h-full flex items-center justify-center">
              {" "}
              <WaveformPlayer audioUrl={src} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
