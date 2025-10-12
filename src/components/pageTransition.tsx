/** @format */

"use client";
import { useRef, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const container = useRef<HTMLDivElement | null>(null); // tipagem segura
  const pathname = usePathname();

  useEffect(() => {
    const el = container.current; // copia a ref para variável local
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    return () => {
      gsap.to(el, { opacity: 0, duration: 0.4, ease: "power2.in" });
    };
  }, [pathname]);

  return (
    <div ref={container} className="w-full h-full">
      {children}
    </div>
  );
}
