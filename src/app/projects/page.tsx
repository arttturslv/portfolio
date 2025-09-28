/** @format */

"use client";

import { useEffect, useRef } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProjectItem from "./components/projectItem";
import {} from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  //const { isDark } = useContext(ThemeContext);
  const isDark = false;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // anima apenas elementos internos, não o container inteiro
      gsap.from(".fade-element", {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const scrollTo = params.get("scrollTo"); // "congrats", "postaai", etc.
  //   if (!scrollTo) return;

  //   const el = document.getElementById(scrollTo);
  //   if (el) {
  //     // esperar o próximo tick para garantir que ScrollTrigger montou
  //     setTimeout(() => {
  //       el.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }, 100);
  //   }
  // }, [location.search]);

  return (
    <div
      ref={containerRef}
      className={`${
        isDark ? "dark" : "light"
      } w-full flex justify-center bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light`}
    >
      <div className="w-full  ">
        <Navbar></Navbar>
        <section className="fade-element  w-full gap-3 text-center flex flex-col items-center my-36">
          <h1 className="text-6xl sm:text-8xl font-bold font-khan  ">
            Projects
          </h1>
          <p className="max-w-[60%] text-lg sm:text-xl font-light">
            Made with love, inspiration and effort
          </p>
        </section>

        <section className="my-32  space-y-32 sm:space-y-64 flex flex-col w-full items-center justify-center ">
          <ProjectItem
            mainImage={{
              src: "/assets/images/projects/congrats/congrats-full.png",
              alt: "Congrats main image",
              full: false,
            }}
            terImage={{
              src: "/assets/images/projects/congrats/congrats-sec.png",
              alt: "Congrats sec image",
              full: false,
            }}
            secImage={{
              src: "/assets/images/projects/congrats/congrats-terc.png",
              alt: "Congrats sec image",
              full: false,
            }}
            title={"Congrats"}
            stack={[
              "JavaScript",
              "React",
              "Tailwind",
              "Node.js",
              "Express",
              "MongoDB",
            ]}
            description={`O Congrats é uma aplicação que permite criar mensagens personalizadas para celebrar ocasiões únicas como Natal, aniversários, amizades e muito mais.
A proposta é transformar cada celebração em uma experiência memorável, tanto para quem cria quanto para quem recebe.`}
            liveSrc={"c.arttturslv.com"}
            githubSrc={"github.com/arttturslv/Congrats"}
          ></ProjectItem>

          <ProjectItem
            mainImage={{
              src: "/assets/images/projects/postaai/postaai-full.png",
              alt: "Posta ai main image",
              full: false,
            }}
            terImage={{
              src: "/assets/images/projects/postaai/postaai-terc.png",
              alt: "Posta ai terc image",
              full: false,
            }}
            secImage={{
              src: "/assets/images/projects/postaai/postaai-sec.png",
              alt: "Posta ai sec image",
              full: false,
            }}
            title={"Postaai"}
            stack={["React", "Tailwind", "Node.js", "MongoDB"]}
            description={`O PostaAi é uma aplicação que funciona como um mural virtual colaborativo, onde qualquer pessoa pode deixar anotações, recados ou até desenhos. A proposta é criar um espaço interativo e aberto, permitindo que cada usuário deixe sua marca e contribua para uma experiência coletiva única.`}
            liveSrc={"postaai.artttur.com"}
            githubSrc={"github.com/arttturslv/Posta-ai"}
          ></ProjectItem>

          <ProjectItem
            mainImage={{
              src: "/assets/images/projects/minimizaai/minimizaai-full.png",
              alt: "Minimiza ai main image",
              full: false,
            }}
            terImage={{
              src: "/assets/images/projects/minimizaai/minimizaai-terc.png",
              alt: "Minimiza ai terc image",
              full: false,
            }}
            secImage={{
              src: "/assets/images/projects/minimizaai/minimizaai-sec.png",
              alt: "Minimiza ai sec image",
              full: false,
            }}
            title={"Postaai"}
            stack={["React", "Tailwind", "Node.js", "Express", "MongoDB"]}
            description={`O MinimizaAi é uma aplicação web de encurtamento de URLs que facilita o compartilhamento de links de forma rápida. A proposta é oferecer uma solução simples para gerar links curtos, armazená-los e gerenciá-los de maneira prática localmente.`}
            liveSrc={"s.artttur.com"}
            githubSrc={"github.com/arttturslv/MinimizaAi"}
          ></ProjectItem>
        </section>

        <section className="my-48 flex justify-center">
          <h4 className="sm:text-xl text-2xl text-center ">
            Por enquanto é só isso, mas vem mais por aí!
          </h4>
        </section>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default Projects;
