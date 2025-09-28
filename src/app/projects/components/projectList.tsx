/** @format */

"use client";

import { useEffect, useRef } from "react";
import ProjectItem from "./projectItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  websiteSrc?: string;
  githubSrc?: string;
  images: { src: string; alt: string }[];
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-element").forEach((el: any) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // quando entra na tela
              end: "bottom 20%", // quando sai da tela
              toggleActions: "play reverse play reverse",
              // "play reverse play reverse" = play ao entrar, reverse ao sair, play ao entrar novamente, reverse ao sair de novo
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section
      ref={containerRef}
      className="my-32 space-y-32 sm:space-y-64 flex flex-col w-full items-center justify-center"
    >
      {projects.map((project) => (
        <ProjectItem
          _id={project._id}
          key={project._id}
          images={project.images}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          websiteSrc={project.websiteSrc}
          githubSrc={project.githubSrc}
        />
      ))}
    </section>
  );
}
