/** @format */

import tailwindIcon from "/assets/images/techstack/tailwind.svg";
import javascriptIcon from "/assets/images/techstack/js.svg";
import typescriptIcon from "/assets/images/techstack/ts.svg";
import reactIcon from "/assets/images/techstack/react.svg";
import figmaIcon from "/assets/images/techstack/figma.svg";

export default function TechShowcase() {
  return (
    <div className=" fade-element space-y-6 flex flex-col items-center">
      <h3>here some of my best skills</h3>
      <div className="flex sm:gap-18 gap-8 flex-wrap items-center justify-center">
        <span className="flex flex-col gap-1 items-center">
          <img loading="lazy" src={javascriptIcon} className="w-14" alt="" />
          <label className="text-sm">JavaScript</label>
        </span>

        <span className="flex flex-col gap-1 items-center">
          <img loading="lazy" src={typescriptIcon} className="w-14" alt="" />
          <label className="text-sm">TypeScript</label>
        </span>

        <span className="flex flex-col gap-1 items-center">
          <img loading="lazy" src={reactIcon} className="w-14" alt="" />
          <label className="text-sm">React</label>
        </span>

        <span className="flex flex-col gap-1 items-center">
          <img loading="lazy" src={tailwindIcon} className="w-14" alt="" />
          <label className="text-sm">Tailwind</label>
        </span>

        <span className="flex flex-col gap-1 items-center">
          <img loading="lazy" src={figmaIcon} className="w-14" alt="" />
          <label className="text-sm">Figma</label>
        </span>
      </div>
    </div>
  );
}
