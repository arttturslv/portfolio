/** @format */

import About from "./components/about";
import Cite from "./components/cite";
import Footer from "../../components/footer";
import Hero from "./components/hero";
import Navbar from "../../components/navbar";
import Projects from "./components/projects";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home() {
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

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center"
    >
      <Navbar></Navbar>

      <div className="w-full max-w-[1400px] px-2 sm:px-12  ">
        <Hero />
        <About />

        <Projects></Projects>

        <Cite></Cite>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
