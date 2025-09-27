/** @format */

import { useRef, useState } from "react";

interface image {
  src: string;
  alt: string;
  full?: boolean;
}
interface ProjectItemProps {
  mainImage: image;
  secImage: image;
  terImage: image;
  title: string;
  stack: string[];
  description: string;
  liveSrc: string | null;
  githubSrc: string | null;
}
export default function ProjectItem({
  mainImage,
  description,
  githubSrc,
  liveSrc,
  secImage,
  stack,
  terImage,
  title,
}: ProjectItemProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [color, setColor] = useState<[number, number, number]>([0, 0, 0]);

  function getAverageRGB(img: HTMLImageElement): [number, number, number] {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const context = canvas.getContext("2d");
    if (!context) return [0, 0, 0];

    context.drawImage(img, 0, 0, 1, 1);
    const data = context.getImageData(0, 0, 1, 1).data;
    return [data[0], data[1], data[2]];
  }

  return (
    <div
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="flex flex-col gap-4 max-w-7xl "
    >
      <div className="flex max-sm:flex-col sm:gap-2 gap-0.5 fade-element  ">
        <div className="sm:w-1/3 flex flex-col sm:gap-2 gap-0.5 ">
          <div
            style={{ backgroundColor: `rgb(${color.join(",")})` }}
            className={` w-full max-h-56 h-full flex items-center justify-center overflow-hidden relative group transition-all duration-300`}
          >
            <img
              crossOrigin="anonymous"
              ref={imgRef}
              onLoad={(e) => {
                const [r, g, b] = getAverageRGB(e.currentTarget);
                setColor([r, g, b]);
              }}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={terImage.src}
              alt={`showcase image 1 - ${title}`}
            />
          </div>
          <div
            style={{ backgroundColor: `rgb(${color.join(",")})` }}
            className=" w-full  h-full flex items-center justify-center max-sm:items-start max-h-56 overflow-hidden relative  group transition-all duration-300"
          >
            <img
              className="h-full  object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={secImage.src}
              alt={`showcase image 2 - ${title}`}
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: `rgb(${color.join(",")})` }}
          className="sm:w-2/3 flex items-center justify-center w-full overflow-hidden group relative transition-all duration-300"
        >
          <div className="w-full flex items-start justify-center  p-6 h-108 overflow-hidden ">
            <img
              className="h-full shadow-xl w-full object-top object-cover rounded-sm transition-transform duration-500 ease-in-out"
              src={mainImage.src}
              alt={`showcase image 3 - ${title}`}
            />
          </div>
          <div className="w-full group-hover:-bottom-22 duration-500 flex-col items-start transition-all ease-out absolute bottom-0 sm:h-22 h-26 px-8 py-4 flex  from-black/70 to-black/0 bg-linear-to-t">
            <h3 className="text-3xl font-extrabold text-white">{title}</h3>
            <p className="text-white max-sm:text-sm ">{stack.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="xl:p-0 px-4 fade-element">
        <p className="sm:text-2xl text-xl font-light ">{description}</p>
        <div className="flex flex-col">
          {liveSrc && (
            <span className="sm:text-lg text-md">
              see here:{" "}
              <a
                className="underline font-medium transition-all duration-200 hover:text-orange-800"
                href={liveSrc}
              >
                {liveSrc}
              </a>
            </span>
          )}
          {githubSrc && (
            <span className="sm:text-lg text-md">
              code here:{" "}
              <a
                className="underline font-medium transition-all duration-200 hover:text-orange-800"
                href={githubSrc}
              >
                {githubSrc}
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
