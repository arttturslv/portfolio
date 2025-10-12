/** @format */

import About from "./components/about";
import Cite from "./components/cite";
import Footer from "../../components/footer";
import Hero from "./components/hero";
import Navbar from "../../components/navbar";
import Projects from "./components/projects";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./components/contact";
import { ThemeContext } from "../layout";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const { isDark } = useContext(ThemeContext);

  const [isContact, setContact] = useState(false);

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

  const closeContact = () => {
    setContact(false);
  };

  const openContact = () => {
    setContact(true);
  };

  return (
    <div
      ref={containerRef}
      className={`${
        isDark ? "dark" : "light"
      } w-full overflow-x-hidden flex flex-col bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light items-center justify-center`}
    >
      <Navbar></Navbar>
      <Contact closeContact={closeContact} showContact={isContact}></Contact>
      <div className="w-full max-w-[1400px] px-2 sm:px-12  ">
        <Hero />
        <About openContact={openContact} />

        <Projects></Projects>

        <Cite></Cite>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
