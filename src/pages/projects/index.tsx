/** @format */

import { useContext, useEffect, useRef } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProjectItem from "./components/projectItem";
import { useLocation } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../../routes/routes";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const { isDark } = useContext(ThemeContext);

  const location = useLocation();
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo"); // "congrats", "postaai", etc.
    if (!scrollTo) return;

    const el = document.getElementById(scrollTo);
    if (el) {
      // esperar o próximo tick para garantir que ScrollTrigger montou
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [location.search]);

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
          <h1 className="text-8xl font-bold font-khan ">Projects</h1>
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
            description={`O Congrats é uma aplicação que permite criar mensagens personalizadas para celebrar ocasiões únicas como Natal, aniversários, amizades e muito mais.
A proposta é transformar cada celebração em uma experiência memorável, tanto para quem cria quanto para quem recebe.`}
            liveSrc={"c.arttturslv.com"}
            githubSrc={"github.com/arttturslv/Congrats"}
          ></ProjectItem>
          <ProjectItem
            mainImageSrc={"assets/images/projects/postaai/main.png"}
            secImageSrc={"assets/images/projects/postaai/pc.png"}
            terImageSrc={"assets/images/projects/postaai/phone.png"}
            title={"Postaai"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={`O PostaAi é uma aplicação que funciona como um mural virtual colaborativo, onde qualquer pessoa pode deixar anotações, recados ou até desenhos. A proposta é criar um espaço interativo e aberto, permitindo que cada usuário deixe sua marca e contribua para uma experiência coletiva única.`}
            liveSrc={"postaai.artttur.com/"}
            githubSrc={"github.com/arttturslv/Posta-ai"}
          ></ProjectItem>

          <ProjectItem
            mainImageSrc={"assets/images/projects/minimizaai/main.png"}
            secImageSrc={"assets/images/projects/minimizaai/pc.png"}
            terImageSrc={"assets/images/projects/minimizaai/phone.png"}
            title={"Minimizaai"}
            stack={["React", "Tailwind", "TypeScript", "Node.js"]}
            description={`O MinimizaAi é uma aplicação web de encurtamento de URLs que facilita o compartilhamento de links de forma rápida. A proposta é oferecer uma solução simples para gerar links curtos, armazená-los e gerenciá-los de maneira prática localmente.`}
            liveSrc={"s.artttur.com/"}
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
