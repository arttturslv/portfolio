/** @format */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechShowcase from "./techShowcase";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  name: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "CONGRATS",
    description: "New way of congratulating people",
    image: "/assets/images/projects/congrats/main.png",
  },
  {
    name: "POSTAAI",
    description: "Our online post it mural",
    image: "/assets/images/projects/postaai/main.png",
  },
  {
    name: "ENCURTAAI",
    description: "Short that link",
    image: "/assets/images/projects/encurtaai/main.png",
  },
  {
    name: "SABIO",
    description: "Need some advice? See your online guru",
    image: "/assets/images/projects/guru/main.png",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  // ScrollTrigger que mapeia progress -> índice (funciona para cima e pra baixo)
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const transitions = Math.max(1, projects.length - 1); // número de passos

    const st = ScrollTrigger.create({
      trigger: container,
      start: "center center", // "assim que os projects estiverem centralizados, inicia"
      end: () => `+=${window.innerHeight * transitions * 0.5}`, // cada passo ocupa 1 viewport
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      // markers: true, // descomente para debug visual
      onUpdate(self) {
        // progress vai de 0..1 -> mapeamos pro índice
        const idx = Math.round(self.progress * transitions);
        setActiveIndex((prev) => (prev === idx ? prev : idx));
      },
    });

    // refresh automático em resize (end é função, então refresh recalcula)
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      ScrollTrigger.refresh();
    };
  }, []);

  useEffect(() => {
    if (!projectRef.current) return;

    const project = projectRef.current;
    if (project) {
      gsap.fromTo(
        project,
        { autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    buttonsRef.current.forEach((btn, i) => {
      if (!btn) return;
      gsap.to(btn, {
        scale: i === activeIndex ? 1.05 : 1,
        color: i === activeIndex ? "#000000" : "#9ca3af",
        duration: 0.35,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  return (
    <section className="my-48 sm:space-y-32  ">
      <TechShowcase />

      <div>
        <div
          ref={containerRef}
          className="relative w-full h-[50vh] md:h-[70vh]  lg:h-[75vh] overflow-hidden"
          aria-label="projects-scroll-container"
        >
          <div className="absolute left-0 top-0  bottom-0 w-1/3 flex items-center justify-center pointer-events-auto">
            <div className="flex flex-col space-y-4 text-3xl font-bold pl-8 max-sm:hidden">
              {projects.map((proj, i) => (
                <button
                  key={proj.name}
                  ref={(el) => {
                    buttonsRef.current[i] = el;
                  }}
                  type="button"
                  className="text-gray-400 text-left focus:outline-none"
                  onClick={() => {
                    const containerTop =
                      containerRef.current!.getBoundingClientRect().top +
                      window.scrollY;
                    const start = Math.max(
                      0,
                      containerTop - window.innerHeight / 2
                    );
                    const target = start + i * window.innerHeight;
                    gsap.to(window, {
                      scrollTo: target,
                      duration: 0.8,
                      ease: "power2.out",
                    });
                  }}
                >
                  {proj.name}
                </button>
              ))}
            </div>
          </div>

          {/* conteúdo (à direita) */}
          <div className="absolute max-sm:w-full  right-0 top-0 bottom-0 w-2/3 flex items-center justify-center">
            <div
              ref={projectRef}
              className="relative  w-full h-full flex flex-col gap-2 items-center  justify-center"
            >
              {/* fade top */}

              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].name}
                loading="lazy"
                className="max-h-[65%]  object-contain shadow-lg z-10"
              />

              <div className=" w-full text-center">
                <h4 className="font-semibold text-lg">
                  {projects[activeIndex].description}
                </h4>
                <p className="text-sm">
                  JS | React | Tailwind | Node.js | MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <Link to="projects" className="underline">
            see all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
