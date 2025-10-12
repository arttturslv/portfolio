/** @format */

import { useContext } from "react";
import Tooltip from "../../../components/tooltip";
import { ThemeContext } from "../../themeContext";

export default function TechShowcase() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className=" fade-element space-y-6  flex flex-col items-center">
      <h4>here some of my best skills</h4>
      <div
        className={`${
          isDark && "invert"
        } flex sm:gap-18 gap-8 flex-wrap items-center justify-center`}
      >
        <Tooltip content="JavaScript">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/js.svg"}
              className="w-14"
              alt="javascriptIcon"
            />
          </span>
        </Tooltip>
        <Tooltip content="TypeScript">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/ts.svg"}
              className="w-14"
              alt="typescriptIcon"
            />
          </span>
        </Tooltip>

        <Tooltip content="React">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/react.svg"}
              className="w-14"
              alt="reactIcon"
            />
          </span>
        </Tooltip>

        <Tooltip content="Node.js">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/node.svg"}
              className="w-14"
              alt="nodeIcon"
            />
          </span>
        </Tooltip>

        <Tooltip content="Express">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/express.svg"}
              className="w-14"
              alt="expressIcon"
            />
          </span>
        </Tooltip>

        <Tooltip content="TailwindCSS">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/tailwind.svg"}
              className="w-14"
              alt="tailwindIcon"
            />
          </span>
        </Tooltip>

        <Tooltip content="Figma">
          <span className="flex flex-col gap-1 items-center">
            <img
              loading="lazy"
              src={"/assets/images/techstack/figma.svg"}
              className="w-14"
              alt="figmaIcon"
            />
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
