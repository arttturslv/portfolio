/** @format */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechShowcase from "./techShowcase";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "CONGRATS",
    image: "/assets/images/projects/congrats/congrats-full.png",
  },
  {
    name: "POSTAAI",
    image: "/assets/images/projects/postaai/postaai-full.png",
  },
  {
    name: "MINIMIZAAI",
    image: "/assets/images/projects/minimizaai/minimizaai-full.png",
  },
];

export default function Projects() {
  const techRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !techRef.current) return;

    const techBottom =
      techRef.current.offsetTop + techRef.current.offsetHeight + 200;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: `${techBottom}px top`,
        end: () => `+=${projects.length * window.innerHeight}`,
        scrub: true,
        pin: false, // ❌ não fixa, deixa rolar normal
      },
    });

    imgRefs.current.forEach((img, i) => {
      if (!img) return;

      tl.fromTo(
        img,
        { y: 100, opacity: 0 }, // entra de baixo
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        i
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full my-48 space-y-48">
      <div ref={techRef}>
        <TechShowcase />
      </div>

      <div className="flex flex-col gap-48">
        <div className="relative w-[600px] h-[300px] sm:w-full sm:h-[800px]">
          <Image
            src={projects[0].image}
            alt={projects[0].name}
            fill
            className="object-cover  object-top shadow-lg"
          />
          <label className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xl font-bold">
            {projects[0].name}
          </label>
        </div>

        <div className="relative w-[600px] h-[300px] sm:w-full sm:h-[800px]">
          <Image
            src={projects[1].image}
            alt={projects[1].name}
            fill
            className="object-cover  object-top shadow-lg"
          />
          <label className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xl font-bold">
            {projects[1].name}
          </label>
        </div>

        <div className="relative w-[600px] h-[300px] sm:w-full sm:h-[800px]">
          <Image
            src={projects[2].image}
            alt={projects[2].name}
            fill
            className="object-cover  object-top shadow-lg"
          />
          <label className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 text-xl font-bold">
            {projects[2].name}
          </label>
        </div>
      </div>
    </section>
  );
}
