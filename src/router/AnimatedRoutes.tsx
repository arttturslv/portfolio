/** @format */

import { Routes, Route, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Doodles from "../pages/doodles";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedRoutes() {
  const location = useLocation();
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [location]);

  useEffect(() => {
    if (!container.current) return;

    // limpa triggers antigos
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // seleciona todos os elementos da rota atual
    const fadeEls = container.current.querySelectorAll(".fade-element");

    fadeEls.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el, // cada elemento é seu próprio trigger
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, [location.pathname]); // recria sempre que a rot
  return (
    <div ref={container}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/doodles" element={<Doodles />} />
      </Routes>
    </div>
  );
}
