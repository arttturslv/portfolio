/** @format */

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProjectItem from "./components/projectItem";

function Projects() {
  return (
    <div className="w-full flex justify-center bg-zinc-100">
      <div className="w-full  ">
        <Navbar></Navbar>
        <section className="w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-8xl font-bold font-khan ">Feature projects</h1>
          <p className="max-w-[60%] text-xl font-light">
            Made with love, inspiration and effort
          </p>

          {/* <div className="flex gap-2 flex-wrap justify-center">
            <span className="py-1 cursor-pointer px-2 bg-white hover:bg-gray-800 hover:text-white duration-200 transition-all shadow-sm rounded-md">
              React
            </span>
            <span className="py-1 cursor-pointer px-2 bg-white hover:bg-gray-800 hover:text-white duration-200 transition-all shadow-sm rounded-md">
              Node
            </span>
            <span className="py-1 cursor-pointer  px-2 bg-white hover:bg-gray-800 hover:text-white duration-200 transition-all shadow-sm rounded-md">
              Figma
            </span>
            <span className="py-1 cursor-pointer px-2 bg-white hover:bg-gray-800 hover:text-white duration-200 transition-all shadow-sm rounded-md">
              React Native
            </span>
            <span className="py-1 cursor-pointer px-2 bg-white hover:bg-gray-800 hover:text-white duration-200 transition-all shadow-sm rounded-md">
              HTML/CSS
            </span>
          </div> */}
        </section>

        <section className="my-32 space-y-64 flex flex-col w-full items-center justify-center ">
          <ProjectItem
            mainImageSrc={"assets/images/projects/congrats/main.png"}
            secImageSrc={"assets/images/projects/congrats/pc.png"}
            terImageSrc={"assets/images/projects/congrats/phone.png"}
            title={"Congrats"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={
              "I’m a frontend developer based in Belo Horizonte — the capital of cheese 🧀. Passionate about crafting high-quality, delightful, and visually striking digital experiences. Amazed by little things, animals, art, technology and the capacities of our species."
            }
            liveSrc={"http://localhost:5173/projects"}
            githubSrc={null}
          ></ProjectItem>
          <ProjectItem
            mainImageSrc={"assets/images/projects/postaai/main.png"}
            secImageSrc={"assets/images/projects/postaai/pc.png"}
            terImageSrc={"assets/images/projects/postaai/phone.png"}
            title={"Postaai"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={
              "I’m a frontend developer based in Belo Horizonte — the capital of cheese 🧀. Passionate about crafting high-quality, delightful, and visually striking digital experiences. Amazed by little things, animals, art, technology and the capacities of our species."
            }
            liveSrc={"http://localhost:5173/projects"}
            githubSrc={null}
          ></ProjectItem>
        </section>

        <section className="my-48 flex justify-center">
          <h4 className="sm:text-xl text-2xl text-center ">
            Fim por aqui, que tal entrar no meu github a procura de novidades?
          </h4>
        </section>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Projects;
