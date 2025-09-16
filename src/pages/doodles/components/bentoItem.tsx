/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../../routes/routes";

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
          className="w-full  group-hover:scale-105 object-cover transition-all duration-700 "
          src={srcImage}
        />
      </div>
    </div>
  );
}
