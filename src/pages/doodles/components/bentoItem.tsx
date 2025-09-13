/** @format */

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
  const sizeStyle = () => {
    if (fluid) return "w-full h-full"; // preenchimento total da célula da grid
    switch (size) {
      case "large":
        return "min-w-[50vw] min-h-[50vw] lg:w-[50vw] lg:h-[60vw] h-[70vw] opacity-20 bg-red";
      case "medium":
        return "lg:h-full h-[50vw] opacity-20 bg-green";
      case "small":
        return "lg:h-[20vw] w-[50vw] h-[50vw] bg-blue";
      default:
        return "lg:h-[20vw] w-[50vw] h-[50vw] bg-blue";
    }
  };

  return (
    <div
      className={` relative group rounded-xl bg-white hover:invert transition-all duration-700 ease-in-out flex items-center justify-center overflow-hidden ${sizeStyle()}`}
    >
      <span className="absolute z-50 top-3 flex justify-between w-[90%]  left-4 text-sm transition-all duration-400 ">
        <label>{date}</label>
        <label>{title}</label>
      </span>
      <div className="w-full flex justify-center h-full">
        <img
          className="  object-contain transition-all duration-700 "
          src={srcImage}
        />
      </div>
    </div>
  );
}
