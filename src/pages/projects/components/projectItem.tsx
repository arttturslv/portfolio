/** @format */

import { useRef, useState } from "react";

interface ProjectItemProps {
  mainImageSrc: string;
  secImageSrc: string;
  terImageSrc: string;
  title: string;
  stack: string[];
  description: string;
  liveSrc: string | null;
  githubSrc: string | null;
}
export default function ProjectItem({
  mainImageSrc,
  description,
  githubSrc,
  liveSrc,
  secImageSrc,
  stack,
  terImageSrc,
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
      <div className="flex max-sm:flex-col gap-3 fade-element  ">
        <div className="sm:w-1/3 flex flex-col gap-3">
          <div
            style={{ backgroundColor: `rgb(${color.join(",")})` }}
            className={` w-full overflow-hidden relative hover:rounded-xl group transition-all duration-300`}
          >
            <img
              crossOrigin="anonymous"
              ref={imgRef}
              onLoad={(e) => {
                const [r, g, b] = getAverageRGB(e.currentTarget);
                setColor([r, g, b]);
              }}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={mainImageSrc}
            />
          </div>
          <div
            style={{ backgroundColor: `rgb(${color.join(",")})` }}
            className=" w-full overflow-hidden relative hover:rounded-xl group transition-all duration-300"
          >
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={secImageSrc}
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: `rgb(${color.join(",")})` }}
          className="sm:w-2/3 flex  items-center justify-center w-full overflow-hidden group relative md:hover:rounded-xl transition-all duration-300"
        >
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={terImageSrc}
          />
          <div className="w-full duration-500 flex-col items-start transition-all ease-out absolute bottom-0 h-22 px-8 py-4 flex  from-black/50 to-black/0 bg-linear-to-t">
            <h3 className="text-3xl font-extrabold invert">{title}</h3>
            <p className="invert">{stack.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="xl:p-0 px-4 fade-element">
        <p className="text-2xl  ">{description}</p>
        <div className="flex flex-col">
          {liveSrc && (
            <span className="text-lg">
              see here:{" "}
              <a
                className="underline transition-all duration-200 hover:text-orange-800"
                href={liveSrc}
              >
                {liveSrc}
              </a>
            </span>
          )}
          {githubSrc && (
            <span className="text-lg">
              code here:{" "}
              <a
                className="underline transition-all duration-200 hover:text-orange-800"
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
