/** @format */
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tl = React.useRef<gsap.core.Timeline>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const eu = containerRef.current.querySelector(
      "img.main"
    ) as HTMLImageElement;
    const hiddenImgs =
      containerRef.current.querySelectorAll<HTMLImageElement>(".hidden-img");

    if (!eu) return;

    // pega posição central da imagem principal
    const euBox = eu.getBoundingClientRect();
    const euCenterX = euBox.left + euBox.width / 2;
    const euCenterY = euBox.top + euBox.height / 2;

    tl.current = gsap.timeline({ paused: true });

    hiddenImgs.forEach((img, i) => {
      const imgBox = img.getBoundingClientRect();
      const imgCenterX = imgBox.left + imgBox.width / 2;
      const imgCenterY = imgBox.top + imgBox.height / 2;

      const fromX = euCenterX - imgCenterX;
      const fromY = euCenterY - imgCenterY;

      // cada imagem "nasce" do centro da eu.png
      tl.current?.fromTo(
        img,
        { opacity: 0, x: fromX, y: fromY, scale: 0.5 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        i * 0.2 // stagger manual
      );
    });

    hiddenImgs.forEach((img) => {
      // Hover in
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.2, // aumenta o scale
          duration: 0.3,
          ease: "power1.out",
        });
      });

      // Hover out
      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1, // volta ao tamanho normal
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  }, []);
  return (
    <section className="my-48 space-y-12">
      <div className=" flex gap-12 flex-col  justify-center">
        <div
          ref={containerRef}
          onMouseEnter={() => tl.current?.play()}
          onMouseLeave={() => tl.current?.reverse()}
          className="w-full  group flex items-center justify-center"
        >
          <div className="relative group w-72">
            <img
              src="/assets/images/interests/eu.png"
              className="w-full main group-hover:shadow-xl duration-400 transition-all"
              alt=""
            />
            <div className="absolute top-0 bg-gradient-to-t w-full h-42 from-transparent to-white/30"></div>

            <img
              src="/assets/images/interests/moto.png"
              className="hidden-img w-28 absolute left-48 bottom-64"
              alt=""
            />
            <img
              src="/assets/images/interests/torta.png"
              className="hidden-img w-20 absolute right-58 bottom-58"
              alt=""
            />
            <img
              src="/assets/images/interests/sapo.png"
              className="hidden-img w-42 absolute left-64 bottom-0"
              alt=""
            />
            <img
              src="/assets/images/interests/puc.png"
              className="hidden-img w-20 absolute right-80 bottom-22"
              alt=""
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-3xl font-light">
            I’m a developer based in Belo Horizonte — the capital of cheese 🧀.
            Passionate about crafting high-quality digital experiences, putting
            ideas into code. Amazed by little things, nature, food, art,
            technology & the capacities of our species.
          </p>

          <a
            href="https://github.com/arttturslv"
            className="underline transition-all duration-200 hover:text-orange-800"
          >
            talk to me
          </a>
        </div>
      </div>
    </section>
  );
}
