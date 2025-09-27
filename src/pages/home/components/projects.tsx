/** @format */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechShowcase from "./techShowcase";

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
        start: `${techBottom}px top`, // só começa depois do TechShowcase sumir
        end: () => `+=${projects.length * window.innerHeight}`,
        scrub: true,
        pin: true, // só pin o slideshow
      },
    });

    imgRefs.current.forEach((img, i) => {
      if (!img) return;

      tl.fromTo(
        img,
        { y: 200, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" },
        i
      ).to(
        img,
        { y: -200, autoAlpha: 0, duration: 0.6, ease: "power3.in" },
        i + 0.5
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen my-48 sm:space-y-32 "
    >
      <div ref={techRef}>
        <TechShowcase />
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {projects.map((proj, i) => (
          <div
            key={proj.name}
            ref={(el) => {
              if (el) imgRefs.current[i] = el;
            }}
            className="absolute w-full h-full flex items-center justify-center top-0 left-0"
          >
            <div className="flex items-center justify-center h-[50vh] md:h-[70vh] lg:h-[80vh] w-full">
              <div className="flex flex-col items-center gap-2 justify-center h-[50vh] md:h-[70vh] lg:h-[80vh] w-full">
                <img
                  src={proj.image}
                  alt={proj.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <label className="text-2xl sm:text-xl font-bold">
                  {proj.name}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
