/** @format */

import Navbar from "../../components/navbar";
import ProjectItem from "./components/projectItem";

function Projects() {
  return (
    <div className="w-full flex justify-center bg-zinc-100">
      <div className="w-full  px-4  ">
        <Navbar></Navbar>
        <section className="w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-8xl font-bold font-khan ">Feature projects</h1>
          <p className="max-w-[60%] text-xl">
            Made with love, inspiration and effort
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
            <span className="py-1 px-2 bg-white hover:bg-gray-700 duration-200 transition-all shadow-sm rounded-md">
              React
            </span>
            <span className="py-1 px-2 bg-white hover:bg-gray-700 duration-200 transition-all shadow-sm rounded-md">
              Node
            </span>
            <span className="py-1 px-2 bg-white hover:bg-gray-700 duration-200 transition-all shadow-sm rounded-md">
              Figma
            </span>
            <span className="py-1 px-2 bg-white hover:bg-gray-700 duration-200 transition-all shadow-sm rounded-md">
              React Native
            </span>
            <span className="py-1 px-2 bg-white hover:bg-gray-700 duration-200 transition-all shadow-sm rounded-md">
              HTML/CSS
            </span>
          </div>
        </section>

        <section className={`my-32 space-y-32 `}>
          <ProjectItem
            mainImageSrc={"assets/images/preview.png"}
            secImageSrc={"assets/images/preview.png"}
            terImageSrc={"assets/images/preview.png"}
            title={"Congrats"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={
              "I’m a frontend developer based in Belo Horizonte — the capital of cheese 🧀. Passionate about crafting high-quality, delightful, and visually striking digital experiences. Amazed by little things, animals, art, technology and the capacities of our species."
            }
            liveSrc={"http://localhost:5173/projects"}
            githubSrc={null}
          ></ProjectItem>
          <ProjectItem
            mainImageSrc={"assets/images/preview.png"}
            secImageSrc={"assets/images/preview.png"}
            terImageSrc={"assets/images/preview.png"}
            title={"Congrats"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={
              "I’m a frontend developer based in Belo Horizonte — the capital of cheese 🧀. Passionate about crafting high-quality, delightful, and visually striking digital experiences. Amazed by little things, animals, art, technology and the capacities of our species."
            }
            liveSrc={"http://localhost:5173/projects"}
            githubSrc={null}
          ></ProjectItem>
        </section>
      </div>
    </div>
  );
}

export default Projects;
