/** @format */

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Inicializa tamanho e visibilidade
    cursor.style.width = "24px";
    cursor.style.height = "24px";
    cursor.style.borderRadius = "50%";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.top = "0px";
    cursor.style.left = "0px";
    cursor.style.background = "transparent";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      const size = isHovering ? 48 : 24;
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      gsap.to(cursor, {
        x: mouse.current.x - size / 2,
        y: mouse.current.y - size / 2,
        duration: 0.1,
        ease: "power2.out",
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isHovering]);

  const handleHover = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    // Verifica se é link ou botão
    const isLinkOrButton = target.closest("a, button") !== null;

    setIsHovering(isLinkOrButton);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleHover);
    return () => {
      window.removeEventListener("mousemove", handleHover);
    };
  }, []);

  return (
    <div
      className="transition-all duration-75 border-1 border-orange-800"
      ref={cursorRef}
    ></div>
  );
}
