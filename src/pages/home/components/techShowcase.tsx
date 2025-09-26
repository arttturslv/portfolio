/** @format */

import tailwindIcon from "/assets/images/techstack/tailwind.svg";
import javascriptIcon from "/assets/images/techstack/js.svg";
import typescriptIcon from "/assets/images/techstack/ts.svg";
import reactIcon from "/assets/images/techstack/react.svg";
import figmaIcon from "/assets/images/techstack/figma.svg";
import expressIcon from "/assets/images/techstack/express.svg";
import nodeIcon from "/assets/images/techstack/node.svg";

import { ThemeContext } from "../../../routes/routes";
import { useContext } from "react";
import Tooltip from "../../../components/tooltip";

export default function TechShowcase() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className=" fade-element space-y-6 flex flex-col items-center">
      <h3>here some of my best skills</h3>
      <div
        className={`${
          isDark && "invert"
        } flex sm:gap-18 gap-8 flex-wrap items-center justify-center`}
      >
        <Tooltip content="JavaScript">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={javascriptIcon} className="w-14" alt="" />
          </span>
        </Tooltip>
        <Tooltip content="TypeScript">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={typescriptIcon} className="w-14" alt="" />
          </span>
        </Tooltip>

        <Tooltip content="React">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={reactIcon} className="w-14" alt="" />
          </span>
        </Tooltip>

        <Tooltip content="Node.js">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={nodeIcon} className="w-14" alt="" />
          </span>
        </Tooltip>

        <Tooltip content="Express">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={expressIcon} className="w-14" alt="" />
          </span>
        </Tooltip>

        <Tooltip content="TailwindCSS">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={tailwindIcon} className="w-14" alt="" />
          </span>
        </Tooltip>

        <Tooltip content="Figma">
          <span className="flex flex-col gap-1 items-center">
            <img loading="lazy" src={figmaIcon} className="w-14" alt="" />
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
