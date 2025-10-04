/** @format */

import Link from "next/link";
import TechShowcase from "./techShowcase";
import Image from "next/image";

const projects = [
  {
    name: "CONGRATS",
    description:
      "Plataforma focada na experiência de criação de mensagens customizadas para marcar momentos.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/images/projects/congrats/congrats-full.png",
    url: "/projects/#congrats",
  },
  {
    name: "POSTAAI",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description:
      "Aplicação de mural virtual colaborativo para compartilhamento de anotações, recados e desenhos.",
    image: "/assets/images/projects/postaai/postaai-full.png",
    url: "/projects/#postaai",
  },
  {
    name: "MINIMIZAAI",
    techStack: ["React", "Node.js", "Express", "MongoDB"],

    description:
      "Ferramenta simples para gerar, armazenar e compartilhar links curtos.",
    image: "/assets/images/projects/minimizaai/minimizaai-full.png",
    url: "/projects/#minimizaai",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full my-72 space-y-96">
      <div>
        <TechShowcase />
      </div>

      <div className="flex flex-col gap-24 sm:gap-64">
        {projects.map((project, index) => {
          let isOdd = index % 2 !== 0;

          return (
            <div
              className={`flex max-lg:flex-col gap-4 sm:gap-8 ${
                isOdd ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Link
                href={project.url}
                className="cursor-pointer group relative w-full h-[250px] sm:h-[500px] bg-red-200"
              >
                {" "}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover overflow-hidden  object-top shadow-lg  bg-red-400"
                />
                <div className="bg-gradient-to-t from-[#000]/70  flex items-center justify-end z-20 absolute bottom-0 w-full h-20 px-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tl  transition-all duration-300 from-[#000]/30 group-hover:from-[#000]/50 flex items-center justify-center ">
                    <img
                      src="assets/icon/arrow-up-right.svg"
                      className="size-8 invert-100 group-hover:invert-75 transition-all duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </Link>

              <div className="flex flex-col gap-1 lg:max-w-[35%]">
                <label className="text-xl sm:text-2xl lg:text-3xl font-light">
                  {project.description}
                </label>
                <label className="text-xs sm:text-lg font-light">
                  {project.techStack.join(". ")}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
