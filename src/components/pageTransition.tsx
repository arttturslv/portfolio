/** @format */

"use client";
import { useRef, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const container = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    return () => {
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    };
  }, [pathname]);

  return (
    <div ref={container} className="w-full h-full">
      {children}
    </div>
  );
}
